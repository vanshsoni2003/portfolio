// 1️⃣ Import modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// 2️⃣ Create Express app
const app = express();

// 3️⃣ Middleware
app.use(cors());
app.use(express.json());

// 4️⃣ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/vanshdb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// 5️⃣ Mongoose Schema & Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: String,
  message: String,
});

const User = mongoose.model("User", UserSchema);

// 6️⃣ Routes
// Test route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// POST route to receive contact form
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const user = new User({ name, email, phone, subject, message });
    await user.save();
    res.status(200).json({ message: "User saved to MongoDB!", user });
  } catch (error) {
    console.log("POST /api/register error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// 7️⃣ Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
