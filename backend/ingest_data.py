# ingest_data.py

import pandas as pd
from sqlalchemy import create_engine
import sys

# --- IMPORTANT: SPECIFY FILE PATHS HERE ---
# Replace these placeholder paths with the actual paths to your CSV files.
# Example for Windows: "C:/Users/YourUser/Downloads/kcc_data.csv"
# Example for Mac/Linux: "/home/user/data/kcc_data.csv"

KCC_TRANSCRIPTS_PATH = "C:/Users/ALOK/Desktop/statathon/CapitalOne/guj_transcript.csv"
LAND_UTILIZATION_PATH = "C:/Users/ALOK/Desktop/statathon/CapitalOne/states_land_use_pattern.csv"
ICRISAT_DATA_PATH = "C:/Users/ALOK/Desktop/statathon/CapitalOne/ICRISAT-District Level Data.csv"
# Add other file paths as needed

# --- Database Connection ---
DATABASE_URL = "postgresql://user:password@localhost:5432/kisandb"
engine = create_engine(DATABASE_URL)

def ingest_kcc_transcripts(file_path):
    """Processes and ingests the Kisan Call Centre transcripts."""
    print("Attempting to ingest KCC Transcripts...")
    try:
        # Load the CSV file into a pandas DataFrame
        df = pd.read_csv(file_path)
        
        # IMPORTANT: Adjust these column names if they are different in your CSV file.
        # We are assuming your CSV has columns named 'QueryText' and 'ResponseText'.
        df_renamed = df.rename(columns={
            'QueryText': 'query_text', 
            'ResponseText': 'response_text'
        })
        
        # Select only the columns we need for our database table
        df_final = df_renamed[['query_text', 'response_text']]
        
        # Load the data into the 'kcc_transcripts' table
        df_final.to_sql('kcc_transcripts', engine, if_exists='replace', index=False)
        print(f"✅ Successfully ingested {len(df_final)} records into 'kcc_transcripts'.")

    except FileNotFoundError:
        print(f"⚠️  WARNING: File not found at '{file_path}'. Skipping KCC transcripts.")
    except KeyError as e:
        print(f"❌ ERROR: A required column was not found in the KCC CSV file: {e}. Please check the column names.")
    except Exception as e:
        print(f"❌ An error occurred during KCC ingestion: {e}")


def ingest_land_utilization(file_path):
    """Processes and ingests the Land Utilization data."""
    print("\nAttempting to ingest Land Utilization Data...")
    try:
        df = pd.read_csv(file_path)
        
        # IMPORTANT: Adjust these column names if they are different in your CSV file.
        df_renamed = df.rename(columns={
            'State': 'state',
            'Year': 'year',
            'LandUseCategory': 'land_use_category',
            'AreaInHectares': 'area_in_hectares'
        })
        
        df_final = df_renamed[['state', 'year', 'land_use_category', 'area_in_hectares']]
        
        df_final.to_sql('land_utilization', engine, if_exists='replace', index=False)
        print(f"✅ Successfully ingested {len(df_final)} records into 'land_utilization'.")

    except FileNotFoundError:
        print(f"⚠️  WARNING: File not found at '{file_path}'. Skipping Land Utilization data.")
    except KeyError as e:
        print(f"❌ ERROR: A required column was not found in the Land Utilization CSV file: {e}. Please check the column names.")
    except Exception as e:
        print(f"❌ An error occurred during Land Utilization ingestion: {e}")

# You can add more functions here to ingest your other datasets following the same pattern.
# For example:
# def ingest_icrisat_data(file_path):
#     print("\nAttempting to ingest ICRISAT Data...")
#     # ... your pandas processing logic here ...
#     print("✅ Successfully ingested ICRISAT data.")


if __name__ == "__main__":
    print("--- Starting Data Ingestion Process ---")
    
    # Check if pandas is installed
    try:
        import pandas
    except ImportError:
        print("❌ ERROR: 'pandas' library is not installed. Please install it by running: pip install pandas")
        sys.exit(1)

    ingest_kcc_transcripts(KCC_TRANSCRIPTS_PATH)
    ingest_land_utilization(LAND_UTILIZATION_PATH)
    # ingest_icrisat_data(ICRISAT_DATA_PATH)
    
    print("\n--- Data Ingestion Process Finished ---")
