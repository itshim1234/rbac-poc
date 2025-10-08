const User = require("../models/User");




// const getAllUsers=()=>{

// }


// controllers/user.controller.js

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;


  
  // LOGIC: At this point, the user is GUARANTEED to be:
  // 1. An 'admin', OR
  // 2. A 'manager' AND in the SAME department as the user they are editing.
  
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.log("error",error)
    res.status(500).json({ message: 'Error updating user' });
  }
};

module.exports={updateUser}