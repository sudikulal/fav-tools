require("dotenv").config()
const jwt = require("jsonwebtoken")
function login(req, res) {
  try {
    const { password } = req.body;
    if (password != process.env.PASSWORD)
      return res.json({ msg: "Unable to Login" });

    const token = jwt.sign({ jti: Date.now() }, process.env.SECRET_KEY);
    res.cookie("auth_token", token);
    return res.json({ msg: "sucess" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

module.exports = { login };
