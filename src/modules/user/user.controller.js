import bcrypt from "bcrypt"
import { userModel } from "../../../models/user.models.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await  userModel.findOne({email})
  if (user) 
  {res.json("user already exist") } 
  else { const hash =  bcrypt.hashSync(password,17)
    await userModel.insertMany({ name, email, password: hash });
  res.json({ message: "User added with success" });
  }

};
