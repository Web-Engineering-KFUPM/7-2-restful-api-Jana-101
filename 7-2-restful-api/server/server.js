import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
// import dotenv and load environment variables from .env


//import { connectDB } from "./db.js";
import { Song } from "./models/song.model.js";

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());              
app.use(express.json());
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Mongo connected");
} catch (err) {
  console.error("Connection error:", err.message);
  process.exit(1);
}

//await connectDB(process.env.MONGO_URL);

// api/songs (Read all songs)


// api/songs (Insert song)

// /api/songs/:id (Update song)


// /api/songs/:id (Delete song)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));