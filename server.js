const express = require("express");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Sesuaikan dengan alamat frontend
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

const port = 8000;

connectDB();
app.use(express.json());

// body
app.use((req, res, next) => {
  console.log("Body diterima:", req.body);
  next();
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});