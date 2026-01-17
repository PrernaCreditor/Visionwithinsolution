import express from "express";
import { sendContactMail } from "../services/mail.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message, service } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await sendContactMail({ name, email, message, service });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", {
      message: error.message,
      stack: error.stack,
      response: error.response?.body
    });
    
    // Don't expose internal errors in production, but provide helpful messages
    const isDevelopment = process.env.NODE_ENV === "development";
    const errorMessage = error.message || "Failed to send message";
    
    res.status(500).json({ 
      message: errorMessage,
      ...(isDevelopment && { 
        stack: error.stack,
        details: error.response?.body 
      })
    });
  }
});

export default router;
