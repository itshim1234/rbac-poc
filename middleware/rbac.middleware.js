


const authorizeRole=(requiredRoles)=>{ 
    
    return(req,res,next)=>{
           // ASSUMPTION: req.user is populated by a prior authentication middleware (e.g., from a JWT)
    const userRole = req.user.role;

    if(!userRole || !requiredRoles.includes(userRole)){
           return res.status(403).json({ 
        message: 'Forbidden: Insufficient Role Permissions' 
      });
    }
    next();
    }

}

module.exports={authorizeRole}