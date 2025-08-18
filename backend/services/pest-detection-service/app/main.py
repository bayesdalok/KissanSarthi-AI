# pest-detection-service/app/main.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np
import io
import os

# --- Configuration & Setup ---
# Initialize the Flask web application
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) to allow your frontend
# to make requests to this backend service.
CORS(app)

# --- Model Loading ---
# Construct the full path to the model file. This makes the script portable.
# It looks for a 'models' folder in the parent directory of this script's location.
MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'models', 'pest_detection_model.h5')

# Define the class names that your model was trained on.
# IMPORTANT: The order MUST EXACTLY match the output classes of your model.
CLASS_NAMES = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
    'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
    'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
    'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
    'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
    'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy'
]

# Load the pre-trained Keras model from the specified path.
# This is done once when the server starts up for efficiency.
try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print(f"✅ Model loaded successfully from {MODEL_PATH}")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    print(f"👉 Please ensure the model file exists at the path: {MODEL_PATH}")
    model = None

# --- API Endpoint ---
@app.route('/detect-pest', methods=['POST'])
def detect_pest_endpoint():
    """
    This is the main endpoint that receives an image, processes it,
    gets a prediction, and returns a structured JSON response.
    """
    # Check if a model was loaded successfully on startup
    if model is None:
        return jsonify({'error': 'Model is not available. Please check server logs.'}), 500

    # 1. Check if the 'image' file is in the request
    if 'image' not in request.files:
        return jsonify({'error': 'No image file found in the request'}), 400

    file = request.files['image']
    
    # Read the image file as bytes
    try:
        image_bytes = file.read()
    except Exception as e:
        return jsonify({'error': f'Could not read the file: {str(e)}'}), 400

    # 2. Preprocess the image and get a prediction
    try:
        # Open the image from the in-memory bytes and convert to RGB
        img = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        
        # Resize the image to the size your model expects (e.g., 224x224 pixels)
        img = img.resize((224, 224))
        
        # Convert the image to a numpy array and normalize pixel values
        img_array = np.array(img) / 255.0
        
        # Add a batch dimension because the model expects batches of images
        img_array = np.expand_dims(img_array, axis=0)
        
        # Get a prediction from the loaded model
        prediction = model.predict(img_array)

    except Exception as e:
        print(f"Error during image processing or prediction: {e}")
        return jsonify({'error': 'Failed to process the image. It might be corrupted or in an unsupported format.'}), 500

    # 3. Process the prediction result
    # The prediction is an array of probabilities. Find the highest one.
    confidence = np.max(prediction)
    class_index = np.argmax(prediction)
    pest_name = CLASS_NAMES[class_index]

    # This is a placeholder for a more sophisticated solution database.
    # In a real-world app, you would look this up from a database or a file.
    solutions_db = {
        "Tomato___Late_blight": "Apply a copper-based fungicide, ensure proper air circulation, and avoid overhead watering.",
        "Tomato___Bacterial_spot": "Remove and destroy infected plants. Use copper sprays as a preventive measure.",
        "Potato___Late_blight": "Destroy infected foliage. Apply fungicides preventively, especially during cool, moist weather.",
        "Apple___Apple_scab": "Prune infected leaves and branches. Apply fungicides from bud break until dry weather prevails."
    }
    solution = solutions_db.get(pest_name, "Consult a local agricultural expert for a specific treatment plan for your region.")

    # 4. Create the final JSON response
    response = {
        "pest_name": pest_name.replace('___', ' - ').replace('_', ' '),
        "confidence": float(confidence),
        "solution": solution
    }
    
    # 5. Send the response back to the frontend
    return jsonify(response)

# --- Main Execution ---
if __name__ == '__main__':
    # This block runs the app when the script is executed directly.
    # The host '0.0.0.0' makes the server accessible from other devices on the network.
    # The debug flag should be set to False in a production environment.
    app.run(host='0.0.0.0', port=5000, debug=True)
