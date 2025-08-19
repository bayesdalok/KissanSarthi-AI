# Prajanya AI (KissanSarthi-AI) 🌾

Prajanya AI is a comprehensive, AI-powered web application designed to serve as a digital advisor for Indian farmers. It provides crucial, real-time information and intelligent tools to support decision-making, enhance productivity, and improve livelihoods.

**Live Demo:** [kisaansarthi-ai.vercel.app](https://kisaansarthi-ai.vercel.app/)

---

## ✨ Key Features

* **🤖 AI Agricultural Advisor:** An interactive chatbot that answers questions on weather, market prices, crop diseases, and government schemes.
* **🗣️ Voice & Image Input:** Interact with the chatbot using voice commands or by uploading images for pest and disease identification.
* **🌦️ Weather Forecast:** Get detailed 15-day weather predictions to plan farming activities effectively.
* **🌱 Crop Advisory:** AI-driven recommendations for crop selection, sowing times, and techniques to boost yield.
* **💰 Real-Time Market Prices:** Access up-to-date prices from local Mandis (markets) to determine the best time to sell produce.
* **🏛️ Government Policy Hub:** Easy access to the latest information on government schemes, subsidies, and agricultural policies.
* **🌐 Multi-language Support:** The interface is available in English, Hindi, Gujarati, and Marathi to cater to a diverse user base.
* **🌙 Dark Mode:** A comfortable viewing experience in low-light conditions.

---

## 🛠️ Technology Stack

The project is built with a modern, full-stack architecture:

* **Frontend:**
    * HTML5
    * CSS3 (with custom properties for theming)
    * Vanilla JavaScript (for dynamic functionality and API interactions)
* **Backend:**
    * Python (likely using a web framework like Flask or FastAPI)
    * AI/ML models for chatbot responses and image analysis.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Python 3.8+
* A web browser

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/bayesdalok/Prajanya-AI.git](https://github.com/bayesdalok/Prajanya-AI.git)
    cd Prajanya-AI
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    # Create a virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

    # Install required packages
    pip install -r requirements.txt

    # Run the backend server
    python app.py 
    ```
    The backend server will typically start on `http://localhost:8002` or `http://localhost:5000`.

3.  **Set up the Frontend:**
    * Navigate to the `frontend` directory.
    * Open the `index.html` file directly in your web browser.
    * **Note:** For full functionality (like API calls to the backend), you may need to run the frontend from a local web server to avoid CORS issues. You can use a simple Python server for this:
        ```sh
        # From within the 'frontend' directory
        python -m http.server
        ```
        Then, access the site at `http://localhost:8000`.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.