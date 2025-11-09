# 💬 AI Assistant Web Application

This is a full-stack AI Assistant web application that integrates a chat API (Gemini) into a modern web interface.
It allows users to chat with an AI model directly from the browser, with a clean and responsive frontend and a Node.js + Express backend handling API calls securely.

# 🚀 Features

+ ⚡ Real-time chat interface built with React + Vite

+ 🧠 Integration with Gemini AI API

+ 🔄 Dynamic model switching (you can choose which model to use)

+ 🖤 Sleek Purple and Black UI Theme

+ 🔐 Secure server-side environment variable handling (.env)

+ 🧩 Modular folder structure (components, services, backend separation)

🏗️ Project Structure
```
CHATBOT/
│
├── public/                  # Public assets (favicon, etc.)
├── server/                  # Backend server
│   ├── server.js            # Express server and API routes
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables (API key, etc.)
│
├── src/                     # Frontend source files
│   ├── components/          # React components (Chat, MessageBubble, etc.)
│   ├── services/            # API service functions
│   ├── assets/              # Images or icons
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global CSS (Purple + Black theme)
│   └── main.jsx             # React entry point
│
├── package.json             # Frontend dependencies
└── README.md                # Project documentation
```

## ⚙️ Tech Stack

1. **Frontend**
   - React (Vite)
   - CSS3
   - Axios (for API calls)

2. **Backend**
   - Node.js
   - Express.js
   - dotenv (for environment configuration)

3. **AI Integration**
   - Gemini AI API

## 🔑 Environment Variables

Create a .env file inside the server folder and add:

```
API_KEY=your_gemini_api_key_here
PORT=3001
```

## 🧩 How It Works

+ The frontend (React) sends chat messages to the Express server.

+ The server makes a request to the Gemini API using the provided model name.

+ The AI’s response is sent back to the frontend and displayed in the chat interface.

# 🖥️ Running the Project
**1️⃣ Clone the repository**
```
git clone https://github.com/ChiragChiru-v/chatbot.git
cd chatbot-ai-assistant
```

**2️⃣ Install dependencies**

**Frontend**:
```
npm install
```

**Backend**:
```
cd server
npm install
```
**3️⃣ Add your .env file**

+ Place your Gemini API key inside server/.env.

**4️⃣ Run the backend**
```
cd server
node server.js
```

** 5️⃣ Run the frontend**

In a new terminal:
```
npm run dev
```

+ The app will open in your browser (usually at http://localhost:5173).

## 🎨 UI Theme

The UI uses a purple and black gradient theme for a futuristic chatbot appearance.

## 🧠 Future Enhancements

+ Add conversation history storage

+ Add authentication for users

+ Support for multiple AI providers

+ Voice input and text-to-speech response

# 👨‍💻 Author

Chirag V
💼 Full Stack Developer | AI Enthusiast
🔗[ GitHub](https://github.com/ChiragChiru-v/)
 | [LinkedIn](www.linkedin.com/in/chirag-v-86312427b)
