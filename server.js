const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB=require("./config/db")
const userRoutes = require("./routes/user.routes");

const cookieParser=require("cookie-parser")
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Allow CORS from your React frontend
app.use(
  cors({
    origin: "http://localhost:5175", // your React app
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "x-user"], // allow custom headers
  })
);

// ✅ Example route
app.post("/api/v1/create", (req, res) => {
  // headers are always lowercase in Node.js
  const userHeader = req.headers["x-user"];

  let user = null;
  try {
    user = userHeader ? JSON.parse(userHeader) : null;
  } catch (err) {
    return res.status(400).json({ error: "Invalid x-user header JSON" });
  }

  return res.json({
    message: "Request received successfully ✅",
    body: req.body, // the request body { name, project }
    user,           // parsed header
    rawHeaders: req.headers, // show all headers (for debugging)
  });
});

app.use("/api/v1",userRoutes)

const PORT = 4001;

(async () => {
  try {
    await connectDB(); // connect first
    console.log("✅ Database connected");

   
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Failed to connect DB", err);
    process.exit(1); // stop app if DB connection fails
  }})();






