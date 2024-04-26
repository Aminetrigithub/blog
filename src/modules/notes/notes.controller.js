import { notesModel } from "../../../models/notes.models.js"



const addNote =  async(req,res) => {
const{title, desc, createdBy}  = req.body;
  await notesModel.insertMany({title, desc, createdBy})
res.json({message:'your note is added'})
} ;



const updateNote = async(req,res) => { 
const{title, desc, _id} = req.body
let note = await notesModel.findByIdAndUpdate(_id,{title,desc},{new: true})
if(!note) return res.json({message:"note not found"})
res.json({message:"note is modified", note})
 }


 const deleteNote = async(req,res) => { 
  const{id} = req.body
  let note = await notesModel.findByIdAndDelete({_id:id})
  if(!note) return res.json({message:"note not found"})
res.json({message:"note is deleted", note})
   }

   const getAllNotes = async(req,res) => { 
    let notes = await notesModel.find({}).populate('createdBy', 'name -_id')
    if(!notes.length) return res.json({message:"Sorry, there are not notes here"})
  res.json({message:"The notes of users are:", notes})
     }

     const getUserNotes = async(req,res) => {
      const {createdBy} = req.params 
      let notes = await notesModel.find({createdBy})
      if(!notes.length) return res.json({message:`Sorry, there are no notes for this user `})
    res.json({message:"The notes of this user are:", notes})
       }

export { addNote, updateNote, deleteNote, getAllNotes, getUserNotes }