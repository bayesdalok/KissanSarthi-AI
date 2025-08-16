# seed_db.py

import psycopg2
from psycopg2.extras import execute_values
import datetime

# --- Data to be inserted ---
market_data = [
    ("Vadodara", "Wheat", 2100.0, 2200.0, 2150.0, datetime.datetime.utcnow()),
    ("Vadodara", "Paddy", 1950.0, 2020.0, 1980.0, datetime.datetime.utcnow()),
    ("Vadodara", "Onion", 40.0, 50.0, 45.0, datetime.datetime.utcnow()),
    ("Vadodara", "Tomato", 30.0, 40.0, 35.0, datetime.datetime.utcnow()),
    ("Vadodara", "Potato", 25.0, 32.0, 28.0, datetime.datetime.utcnow()),
    ("Vadodara", "Green Chilli", 110.0, 130.0, 120.0, datetime.datetime.utcnow())
]

try:
    # --- Connect to the running PostgreSQL container ---
    conn = psycopg2.connect(
        dbname="kisandb",
        user="user",
        password="password",
        host="localhost", # Connects to the port mapped in docker-compose
        port="5432"
    )
    cursor = conn.cursor()
    print("Successfully connected to the database.")

    # --- Insert the data ---
    # The SQL query uses the table and column names from market-service/app/models.py
    query = """
    INSERT INTO market_prices (market_name, commodity, min_price, max_price, modal_price, last_updated)
    VALUES %s
    ON CONFLICT (market_name, commodity) DO NOTHING;
    """
    
    execute_values(cursor, query, market_data)
    conn.commit()
    
    print(f"Successfully inserted {cursor.rowcount} records into the market_prices table.")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # --- Clean up ---
    if 'cursor' in locals() and cursor:
        cursor.close()
    if 'conn' in locals() and conn:
        conn.close()
    print("Database connection closed.")
