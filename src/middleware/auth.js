import jwt from "jsonwebtoken"

export const auth = (req,res,next) => { 


  let token = req.header('Token')
  jwt.verify(token,'myNameIsAmine',async(err,decoded) => { 
    if(err) {res.json({message:"error of token", err})}
  else{
next()    
  } })


 }