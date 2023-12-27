const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const token = req.cookies["auth_token"];

  if (!token) return res.status(401).json({msg:"requires admin access"});

  jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) return res.status(401).json({ msg: "please authenticate" });
    next();
  });
};

module.exports = auth; 
