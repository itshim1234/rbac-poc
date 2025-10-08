const express = require('express');
const router = express.Router();
const {updateUser} = require('../controllers/user.controller');

const { authorizeRole } = require('../middleware/rbac.middleware');
const { checkDepartmentAccess } = require('../middleware/abac.middleware');










// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/auth.controller")


const { auth } = require("../middleware/auth.middleware")

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)


// 1. RBAC ONLY: Only an 'admin' can view the list of ALL users
// router.get(
//   '/', 
//   authorizeRole(['admin']), 
//   userController.getAllUsers
// );

// 2. RBAC + ABAC: Only 'admin' or 'manager' can edit a profile.
//    - The `authorizeRole` middleware handles the basic role check.
//    - The `checkDepartmentAccess` middleware handles the department check.
router.put(
  '/:userId', 
  auth,
  authorizeRole(['admin', 'manager']), 
  checkDepartmentAccess('profile'), // Checks if manager is in the same department as the profile
  updateUser
);

module.exports = router;
