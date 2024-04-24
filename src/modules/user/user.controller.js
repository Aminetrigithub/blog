import bcrypt from "bcrypt"
import { userModel } from "../../../models/user.models.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await  userModel.findOne({email})
  if (user) 
  {res.json("user already exist") } 
  else { const hash =  bcrypt.hashSync(password,8)
    await userModel.insertMany({ name, email, password: hash });
  res.json({ message: "User added with success" });
  }

};

export const signIn = async (req, res) => {
  const {  email, password } = req.body;
  let user = await  userModel.findOne({email})
  
  if ( user && bcrypt.compareSync(password, user.password)  ) 
  {res.json("welcome to your account") } 
  else { 
  res.json({ message: "Your email or password is not valid" });
  }

};