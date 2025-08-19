# 🌾 Prajanya-AI

**Prajanya-AI** is a multilingual AI-powered agriculture platform designed to support farmers with real-time market insights, intelligent chatbot assistance, and easy access to agricultural information. It bridges the gap between technology and farming by providing services in **English, Hindi, Gujarati, and Marathi**.

---

## 🚀 Features

* 🤖 **AI Chatbot** (powered by Google Gemini API) for agricultural help and crop advisory
* 🌐 **Multilingual Support** (English, Hindi, Gujarati, Marathi)
* 📊 **Real-time Market Price Viewer** for local mandis
* 📢 **Sales Pitch Generator** for farmers to promote their produce
* 🗣 **Voice Support** (speech-to-text and text-to-speech via Web Speech API)
* 💡 **Accessibility Features** (dark mode, voice input/output)
* 📋 **Feedback & Seller Forms** for continuous improvement
* ☁️ **Cloud Deployed** (Frontend on Vercel, Backend microservices on Render)

---

## 🏗 Tech Stack

**Frontend**

* HTML, CSS, JavaScript
* Vercel Deployment
* Web Speech API for voice input/output

**Backend**

* FastAPI (Python)
* Microservices for chatbot & market data
* PostgreSQL database (managed on Render)
* SQLAlchemy ORM

**Integrations**

* Google Gemini API (AI chatbot responses)
* Twilio WhatsApp API *(future scope)*
* Government APIs for mandi prices, weather, and subsidies

---

## ⚙️ System Architecture

```
Frontend (Vercel) <--> Backend Microservices (Render)
         |                     |
   [HTML/CSS/JS]          [FastAPI Services]
   - Chat UI               - Chatbot Service (Gemini API)
   - Market Prices          - Market Price Service
   - Voice Support          - PostgreSQL (SQLAlchemy ORM)
```

External Integrations:

* Google Gemini API (chat responses)
* Twilio WhatsApp API *(planned)*
* Govt. APIs for agriculture data *(planned)*

---

## 📂 Project Structure

```
prajanya-ai/
│── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── backend/
│   ├── chat-service/
│   │   └── main.py
│   ├── market-service/
│   │   └── main.py
│   ├── database/
│   │   └── models.py
│   └── requirements.txt
│
│── README.md
```

---

## 🔧 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/prajanya-ai.git
cd prajanya-ai
```

### 2. Backend Setup

```bash
cd backend/chat-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8002
```

```bash
cd ../market-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

Make sure to set environment variables:

```bash
export DATABASE_URL=your_postgres_url
export GEMINI_API_KEY=your_gemini_api_key
```

### 3. Frontend Setup

* Open `frontend/index.html` in your browser (or deploy on Vercel).

---

## 📌 Deployment

* **Frontend:** Vercel (auto-deployed from GitHub)
* **Backend:** Render (each microservice deployed separately)
* **Database:** PostgreSQL on Render

---

## 🔮 Future Enhancements

* 🌱 AI-powered pest and disease detection
* ☁️ IoT integration for soil & weather data
* 📈 Predictive analytics for crop yield forecasting
* 🌍 Farmer-to-Farmer social network with AI moderation
* 📲 WhatsApp chatbot support

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---