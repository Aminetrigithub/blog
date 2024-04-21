import { userModel } from "../../../models/user.models.js"

export const signUp = async(req, res) => { 
  const {name,email,password } = req.body

await userModel.insertMany({ name, email, password })
res.json({message: "User added with success"})
 }

