import mongoose from "mongoose";
const notesSchema = mongoose.Schema({
  title: String,
  desc: String,
  createdBy: { type: mongoose.SchemaTypes.ObjectId, 
               ref: 'user' }
});

export const notesModel = mongoose.model("note", notesSchema);
