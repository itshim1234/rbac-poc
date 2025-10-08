

const User = require("../models/User");

// // Anytime you use ABAC rules, make sure the route has a middleware that attaches the resource:

function attachResource(req, res, next) {
  const user = User.find(req.params.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  req.resource = user; // used by authorize for ABAC
  next();
}


const ABAC_RULES = {
  PROJECT_READ: (user, resource) => user.organizationId === resource.organizationId,
  TASK_APPROVE: (user, resource) => user.department === 'site_supervisors' && resource.status === 'submitted',
  DOCUMENT_DOWNLOAD: (user, resource) => resource.isPublic || user.role === 'organization_admin',
};



module.exports={attachResource,ABAC_RULES}
