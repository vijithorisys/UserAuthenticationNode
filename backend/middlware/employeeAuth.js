const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const employeeAuth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization, 'headers')
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Bearer token missing" });
    }
    // Extract the token from the Authorization header
    const token = authHeader.split(" ")[1];
    //verify the token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid Token" });
      }
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { employeeAuth };
