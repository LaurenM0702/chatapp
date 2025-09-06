import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

connectDB();

// Enable CORS for all routes
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const chats = [
  {
    id: 1,
    name: "Chat 1",
    messages: [
      {
        text: "Hello1",
        sender: "User",
      },
      {
        text: "Hello2",
        sender: "User",
      },
    ],
  },
  {
    id: 2,
    name: "Chat 2",
    messages: [
      {
        text: "Hello3",
        sender: "User",
      },
    ],
  },
];

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chats", (req, res) => {
  res.send(chats);
});

app.get("/chats/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat.id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
