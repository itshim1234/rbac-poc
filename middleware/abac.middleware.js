// 2. ABAC Check (Role + Department Attribute)

const User = require("../models/User");



const checkDepartmentAccess=(resourceKey)=>{
    return(req,res,next)=>{
        const {user}=req;
  // **Case 1: Admin/Super Role Bypass**
         if (user.role === 'admin') {
      return next(); 
    }

     // **Case 2: Department Check Logic**

    // a. Get the resource (e.g., a document, a project)
    // NOTE: This usually requires fetching the resource from the database
    // The resourceKey would be an ID from req.params or req.body
    

     let resource; // Assume you fetch the resource here based on req.params.id

     // For simplicity, let's assume we are checking a user profile
    if (resourceKey === 'profile') {
      // Logic for checking if a manager can edit a user in their own department
      const profileToEditId = req.params.userId; 
          
       // *** MOCK: In a real app, you would fetch the user by ID
           const profileToEdit = User.findOne({_id:profileToEditId})
           
           if(user.role ==='manager'){
           if(profileToEdit.department===user.department){
            return next();
           }
            else {
            return res.status(403).json({
                  message: `Forbidden: Cannot manage profiles outside the ${user.department} department` 
            })
        }
        }
    }
          // If no specific logic applies or if they are an 'employee' trying to access someone else's resource
    if (user.role === 'employee') {
        return res.status(403).json({ message: 'Forbidden: Employees cannot manage other resources' });
    }
       

      // Fallthrough: If they passed the specific checks (like the manager one) 
    // or if the resource doesn't have a department restriction.
    next();



    }




}


module.exports={checkDepartmentAccess}
