import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {
  const ACCESS_SECRET_KEY =
    "4af327b35eb52d2cf5da485f833509425d8fdd069217abc20d2d7054eecfbefa8cd7a340a3860cd355449b350c9a3617339c31e219b1be45dc6d539f61666a3e";
  const REFRESH_SECRET_KEY =
    "8aa0fc22413ad43d33753c46840e8e79bccafac51c69e94e5b0683052e8e3569f9464f1f07ba6599b7e31451111c5a2d75716479bd4bc2687b1952092ba5a23c";
  const header = req.body.accesstoken;
  const token = header.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "unauthorized" });
  }

  jwt.verify(token, ACCESS_SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ msg: "invalid token" });
    }
    console.log("success");
    next();
  });
};

export default auth;
