// models/User.js
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['admin', 'manager', 'employee'], // Basic RBAC
    default: 'employee' 
  },
  department: { 
    type: String, 
    enum: ['HR', 'IT', 'Sales','Admin'], // Department Attribute (ABAC)
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);