import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {
  const header = req.body.accesstoken;
  const token = header.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "unauthorized" });
  }

  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ msg: "invalid token" });
    }
    console.log("success");
    next();
  });
};

export default auth;
