import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { model = "gemini-2.5-flash", messages = [] } = req.body || {};

    // ✅ Convert messages to Gemini "history" format
    const history = messages.map((msg) => ({
      role: "model",
      parts: [{ text: msg.text }],
    }));

    // Create chat instance
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      history,
    });

    // You can choose the latest user message for continuation
    const lastUserMsg = messages.filter((m) => m.role === "user").pop();
    const prompt = lastUserMsg ? lastUserMsg.text : "Hello";

    const response = await chat.sendMessage({ message: prompt });

    res.json({ text: response.text });
  } catch (err) {
    console.error("Error in /api/chat:", err);
    res.status(500).json({ error: err?.message || "Unknown error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`✅ Gemini API ready on http://localhost:${PORT}`)
);
