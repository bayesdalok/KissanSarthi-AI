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
