// authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "secret-key");

    if (decoded.adminId) {
      // Admin authentication
      const admin = await Admin.findById(decoded.adminId);
      if (!admin) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid token" });
      }
      req.admin = admin;
    } else {
      // Regular user authentication
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid token" });
      }
      req.user = user;
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const adminAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "secret-key");

    if (!decoded.adminId) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const admin = await Admin.findById(decoded.adminId);
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    req.admin = admin;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

module.exports = {
  authMiddleware,
  adminAuthMiddleware,
};
