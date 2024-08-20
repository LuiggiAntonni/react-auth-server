const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log(req.headers);
  
  // Extract the Authorization header from the request
  const token = req.headers.authorization
    // Use optional chaining to safely access the Authorization header
    ?.split(" ")[1]; // Split the header value by space into an array // Access the second element of the array, which is the actual token

  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    
    
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token!" });
  }
};

module.exports = authMiddleware;
