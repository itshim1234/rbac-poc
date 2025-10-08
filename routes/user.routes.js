const express = require('express');
const router = express.Router();
const {updateUser} = require('../controllers/user.controller');

const { authorize } = require('../middleware/rbac.middleware');
const {  attachResource } = require('../middleware/abac.middleware');











// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/auth.controller")


const { auth } = require("../middleware/auth.middleware");
const { PERMISSIONS } = require('../config/permissions');

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

// TEAM_UPDATE_MEMBER


router.put(
  '/:userId', 
  auth,
attachResource,authorize(PERMISSIONS.TEAM_UPDATE_MEMBER),
  updateUser
);


// router.post("/:id/approve", userAuth, attachTaskResource, authorize([
//   PERMISSIONS.TASK_APPROVE,
//   PERMISSIONS.APPROVAL_REVIEW
// ]), (req, res) => {
//   // user can approve and review tasks
//   res.json({ message: "Task approved successfully" });
// });

// router.get("/:id", userAuth, (req, res, next) => {
//   const project = projects.find(p => p.id === req.params.id);
//   if (!project) return res.status(404).json({ message: "Project not found" });

//   req.resource = project; // attach resource for ABAC
//   next();
// }, authorize(PERMISSIONS.PROJECT_READ), (req, res) => {
//   res.json({ project: req.resource });
// });


module.exports = router;
