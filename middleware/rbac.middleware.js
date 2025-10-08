
const { ROLE_PERMISSIONS } = require("../config/permissions");
const { ABAC_RULES } = require("./abac.middleware");



/**
 * Middleware to authorize a user for one or more permissions
 * Combines RBAC + ABAC checks
 * 
 * @param {string|string[]} requiredPermissions - Permission or array of permissions to check
 */
const authorize = (requiredPermissions) => {
  return (req, res, next) => {
    const user = req.user;
    const resource = req.resource;

    if (!user || !user.role) {
      return res.status(401).json({ message: "Unauthorized: user not found" });
    }

    // Convert single permission to array
    const permissionsToCheck = Array.isArray(requiredPermissions)
      ? requiredPermissions
      : [requiredPermissions];

    // 1️⃣ RBAC: get user's allowed permissions
    const roleConfig = ROLE_PERMISSIONS[user.role];
    if (!roleConfig) {
      return res.status(403).json({ message: "Access denied: role not recognized" });
    }

//     let allowedPermissions = [];

//     if (roleConfig.team === "all" && roleConfig.permissions) {
//       allowedPermissions = roleConfig.permissions;
//     } else if (user.department && roleConfig[user.department]) {
//       allowedPermissions = roleConfig[user.department];
//     }


let allowedPermissions = [];

// 1️⃣ Organization admin with all permissions
if (roleConfig.team === "all" && roleConfig.permissions) {
  allowedPermissions = roleConfig.permissions;
} 
// 2️⃣ User with a department (admin or member)
else if (user.department && roleConfig[user.department]) {
  allowedPermissions = roleConfig[user.department];
} 
// 3️⃣ Fallback: combine all departments if department is missing
else {
  // Flatten all arrays in roleConfig
  allowedPermissions = Object.values(roleConfig)
    .filter(v => Array.isArray(v))
    .flat();
}

// Optional debug
console.log("Allowed permissions for", user.role, user.department, ":", allowedPermissions);


    // 2️⃣ Check each permission
    for (const permission of permissionsToCheck) {
      // RBAC check
      if (!allowedPermissions.includes(permission)) {
        return res.status(403).json({ message: `Access denied: missing RBAC permission (${permission})` });
      }

      // ABAC check (if defined)
      const abacCheck = ABAC_RULES[permission];
      if (abacCheck && !abacCheck(user, resource)) {
        return res.status(403).json({ message: `Access denied: failed ABAC check (${permission})` });
      }
    }

    next(); // all checks passed
  };
};

module.exports = { authorize };
