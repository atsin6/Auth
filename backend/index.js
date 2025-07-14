import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL, // Replace with your frontend's origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    credentials: true, // Allow sending cookies/authorization headers
    optionsSuccessStatus: 204, // For preflight requests (for old browsers)
  })
);

app.use(express.json());

app.use("/", authRoutes);

app.get("/healthy", (req, res) => {
  res.send(`HTTP Server is Running!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
