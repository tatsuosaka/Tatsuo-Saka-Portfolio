import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // System instruction to act as Tatsu's assistant
    const systemInstruction = `
      You are an AI assistant for Tatsuo Saka's portfolio website. 
      Tatsu is a professional Video Editor, Designer, and Web Developer, but his primary focus is currently Video Editing.
      
      Your goal is to answer visitor questions about Tatsu's work, style, and availability.
      
      Key Information about Tatsu:
      - Style: Cinematic, rhythmic, high-impact, "Apple-style" minimalism mixed with dynamic motion.
      - Software: Premiere Pro, After Effects, DaVinci Resolve, React, Tailwind.
      - Availability: Open for freelance high-end commercial and music video projects.
      - Tone: Professional, creative, concise, and helpful.
      
      If asked for a quote, suggest they email him directly at contact@tatsuosaka.com for a tailored estimate.
      Keep responses relatively short (under 100 words) unless asked for a detailed explanation.
    `;

    // We use the generateContent method but maintain a chat history structure manually if needed, 
    // or use the chat API. Here we use the Chat API for state management.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Sorry, I couldn't generate a response.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with the AI assistant.");
  }
};