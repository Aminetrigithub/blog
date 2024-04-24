import { notesModel } from "../../../models/notes.models.js"



const addNote =  async(req,res) => {
const{title, desc, createdBy}  = req.body;
  await notesModel.insertMany({title, desc, createdBy})
res.json({message:'your note is added'})
} ;



const updateNote = async(req,res) => { 
const{title, desc} = req.body
await notesModel.findByIdAndUpdate({_id},{title,desc})
res.json({message:"your note is modified"})
 }


export {addNote,updateNote}