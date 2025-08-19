import os
from typing import Optional, Dict, List

import httpx
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from pydantic import BaseModel
from slowapi import Limiter
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi.util import get_remote_address
from starlette.responses import JSONResponse

# -------- Settings --------
AGMARKNET_RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070"
AGMARKNET_URL = f"https://api.data.gov.in/resource/{AGMARKNET_RESOURCE_ID}"

API_KEY = os.getenv("AGMARKNET_API_KEY")
if not API_KEY:
    raise RuntimeError(
        "Missing AGMARKNET_API_KEY environment variable. "
        "Get a key from https://data.gov.in/ and set AGMARKNET_API_KEY before running."
    )

# -------- App --------
app = FastAPI(title="Market Services", version="1.0.0")

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)

@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"detail": "Too many requests. Please try again shortly."},
    )

# Compression
app.add_middleware(GZipMiddleware, minimum_size=1024)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://prajanya-ai.vercel.app",
        "https://market-services.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------- Models --------
class MarketQuery(BaseModel):
    market_name: Optional[str] = None

# -------- Routes --------
@app.get("/health")
async def health() -> Dict[str, str]:
    return {"status": "ok"}

@app.get("/market-prices")
@limiter.limit("30/minute")
async def get_prices(request: Request, market_name: Optional[str] = None) -> List[Dict]:
    params = {
        "api-key": API_KEY,
        "format": "json",
        "resource_id": AGMARKNET_RESOURCE_ID,
        "limit": 100,
    }

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.get(AGMARKNET_URL, params=params)
            r.raise_for_status()
            payload = r.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Upstream API error")
    except httpx.RequestError:
        raise HTTPException(status_code=502, detail="Unable to reach upstream API")

    records = payload.get("records", []) or []

    def normalize(rec: Dict) -> Dict:
        return {
            "commodity": rec.get("commodity"),
            "variety": rec.get("variety"),
            "market": rec.get("market"),
            "state": rec.get("state"),
            "min_price": rec.get("min_price"),
            "max_price": rec.get("max_price"),
            "modal_price": rec.get("modal_price"),
            "arrival_date": rec.get("arrival_date"),
        }

    # Filter by market name if provided
    # Filter by market name if provided and not empty
    if market_name and market_name.strip():
        filt = [
            normalize(r) for r in records
            if r.get("market") and market_name.lower() in r["market"].lower()
        ]
    else:
        # If no valid market_name given, return all
        filt = [normalize(r) for r in records]

    return filt

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv("PORT", "8000")), reload=True)