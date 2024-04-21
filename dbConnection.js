import mongoose from "mongoose";

export function dbConnection (){

  mongoose.connect('mongodb://localhost:27017/blogMongoDB')
  .then(() => { console.log("DataBase connected ✔") })
  .catch((err) => { console.log("DataBase not connected ❓, error: " + err) })
}

