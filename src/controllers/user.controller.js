require("dotenv").config();
const jwt = require("jsonwebtoken");
async function login(req, res) {
  try {
    const { password } = req.body;
    if (password != process.env.PASSWORD)
      return res.status(406).json({ msg: "invalid password" });

    const token = jwt.sign({ jti: Date.now() }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    await res.cookie("auth_token", token, { maxAge: 60 * 60 * 1000 });
    return res.json({ msg: "success", access_token: token });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

module.exports = { login };
