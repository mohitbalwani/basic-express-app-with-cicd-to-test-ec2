import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.get("/quote", (req: Request, res: Response) => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
  
  app.get("/info", (req: Request, res: Response) => {
    return res.json({ 
      message: "Node.js CI/CD API",
      version: "1.0.0",
      timestamp: new Date().toISOString()
    });
  });

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return res.json({ quote: randomQuote });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


