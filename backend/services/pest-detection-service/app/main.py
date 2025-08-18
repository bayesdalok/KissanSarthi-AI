# train.py
# This script trains the plant disease detection model locally.

import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model
from tensorflow.keras.optimizers import Adam
import os


# --- 1. Define Paths and Parameters ---

# Get the current directory and build the path to the dataset
data_dir = "/home/ethan/Downloads/archive/PlantVillage"

# Parameters for our model and training
IMG_WIDTH, IMG_HEIGHT = 224, 224
BATCH_SIZE = 32
NUM_CLASSES = 15 # The PlantVillage dataset (your subset) has 15 classes
EPOCHS = 5 # Start with 5; increase for higher accuracy if needed

# --- 2. Prepare the Data ---

# Create an ImageDataGenerator for training data with augmentation
train_datagen = ImageDataGenerator(
    rescale=1./255,            # Normalize pixel values
    validation_split=0.2,      # Set aside 20% for validation
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

# Create the training data generator
train_generator = train_datagen.flow_from_directory(
    data_dir,
    target_size=(IMG_WIDTH, IMG_HEIGHT),
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='training'
)

# Create the validation data generator
validation_generator = train_datagen.flow_from_directory(
    data_dir,
    target_size=(IMG_WIDTH, IMG_HEIGHT),
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='validation'
)

# --- 3. Build the Model using Transfer Learning ---

# Load the MobileNetV2 model, pre-trained on ImageNet
base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(IMG_WIDTH, IMG_HEIGHT, 3))

# Freeze the layers of the base model
for layer in base_model.layers:
    layer.trainable = False

# Add our custom layers on top
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(1024, activation='relu')(x)
predictions = Dense(NUM_CLASSES, activation='softmax')(x)

# Create the final model
model = Model(inputs=base_model.input, outputs=predictions)

# --- 4. Compile the Model ---

model.compile(optimizer=Adam(learning_rate=0.001), 
              loss='categorical_crossentropy', 
              metrics=['accuracy'])

# --- 5. Train the Model ---

print("✅ Setup complete. Starting model training...")
history = model.fit(
    train_generator,
    epochs=EPOCHS,
    validation_data=validation_generator
)
print("✅ Training complete!")

# --- 6. Save the Final Model ---

# Save the trained model. This is the file for your backend service.
model.save('pest_detection_model.h5')

print(f"\n✅ Model has been successfully trained and saved as 'pest_detection_model.h5' in your project directory.")
=======
# --- Configuration & Setup ---
app = Flask(__name__)
CORS(app)

# --- Model Loading ---
MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'models', 'pest_detection_model.h5')
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

try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print(f"✅ Model loaded successfully from {MODEL_PATH}")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

# --- API Endpoint ---
@app.route('/detect-pest', methods=['POST'])
def detect_pest_endpoint():
    if model is None:
        return jsonify({'error': 'Model is not available.'}), 500

    if 'image' not in request.files:
        return jsonify({'error': 'No image file found in the request'}), 400

    file = request.files['image']
    image_bytes = file.read()
    
    try:
        # Preprocess the image
        img = Image.open(io.BytesIO(image_bytes)).convert('RGB').resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)
        
        # Get prediction
        prediction = model.predict(img_array)
    except Exception as e:
        return jsonify({'error': f'Failed to process image: {str(e)}'}), 500

    confidence = np.max(prediction)
    class_index = np.argmax(prediction)
    pest_name = CLASS_NAMES[class_index]

    solutions_db = {
        "Tomato___Late_blight": "Apply a copper-based fungicide, ensure proper air circulation, and avoid overhead watering.",
        "Tomato___Bacterial_spot": "Remove and destroy infected plants. Use copper sprays as a preventive measure.",
    }
    solution = solutions_db.get(pest_name, "Consult a local agricultural expert for a specific treatment plan.")

    response = {
        "pest_name": pest_name.replace('___', ' - ').replace('_', ' '),
        "confidence": float(confidence),
        "solution": solution
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
