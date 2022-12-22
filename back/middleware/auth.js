const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
const AUTH_TOKEN = process.env.AUTH_TOKEN;

module.exports = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    const decodedToken = jwd.verify(token, AUTH_TOKEN);
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
  } catch (error) {
    res.status(401).json({ error });
  }
};
