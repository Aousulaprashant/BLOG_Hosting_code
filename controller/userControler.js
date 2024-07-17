import user from "../model/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import Token from "../model/tokenModel.js";

dotenv.config();

const ACCESS_SECRET_KEY =
  "4af327b35eb52d2cf5da485f833509425d8fdd069217abc20d2d7054eecfbefa8cd7a340a3860cd355449b350c9a3617339c31e219b1be45dc6d539f61666a3e";
const REFRESH_SECRET_KEY =
  "8aa0fc22413ad43d33753c46840e8e79bccafac51c69e94e5b0683052e8e3569f9464f1f07ba6599b7e31451111c5a2d75716479bd4bc2687b1952092ba5a23c";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "make sure password length  must be > 6" });
    }
    // const userExist = await user.findOne({ email });
    // if (userExist) {
    //   return res.status(400).json({ msg: "email already exist" });
    // }

    //const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    const newuser = {
      name: req.body.name,
      email: req.body.email,
      password: hashpassword,
    };
    const User = new user(newuser);
    await User.save();

    return res.status(200).json({ msg: " signup the User success" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  let User = await user.findOne({ email });
  console.log(User);

  if (!User) {
    return res.status(400).json({ msg: "email not Found or Registered" });
  }

  try {
    const match = await bcrypt.compare(password, User.password);

    console.log(match);

    if (match) {
      const accestoken = jwt.sign(User.toJSON(), ACCESS_SECRET_KEY, {
        expiresIn: "15m",
      });
      const refreshtoken = jwt.sign(User.toJSON(), REFRESH_SECRET_KEY);

      const newtoken = new Token({ token: refreshtoken });

      await newtoken.save();

      return res.status(200).json({
        accestoken: accestoken,
        refreshtoken: refreshtoken,
        email: email,
      });
    } else {
      return res.status(401).json({ msg: "password not match" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};
