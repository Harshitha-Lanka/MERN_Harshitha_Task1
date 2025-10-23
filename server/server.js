// ===== server.js =====
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ====== Connect to MongoDB ======
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ====== Schema and Model ======
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  role: String,
});

const User = mongoose.model("User", userSchema);

// ====== CRUD Routes ======

// 🟢 Create
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🟡 Read (All)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 🟢 Read (Filtered)
app.get("/users/filter", async (req, res) => {
  const users = await User.find({ age: { $gt: 25 } });
  res.json(users);
});

// 🟠 Update
app.put("/users/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔴 Delete
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ====== Default Route ======
app.get("/", (req, res) => {
  res.send("Welcome to the MERN CRUD API!");
});

// ====== Start Server ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
