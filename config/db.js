const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log(process.env.MONGO_URL);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
