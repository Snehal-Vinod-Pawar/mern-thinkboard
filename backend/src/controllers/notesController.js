import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1});    //-1 will sort in desc order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller",error);
    res.status(500).json({ message: "Internal server error"});
  }
};

export const getNoteById = async (req,res) => {
    try {
        const wantedNote = await Note.findById(req.params.id);

        if(!wantedNote) {return res.status(404).json({message: "Note not found"});}

        res.status(200).json(wantedNote);
    } catch(error) {
        console.error("Error in getNoteById Controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const createNote =  async (req,res) => {
   try {
    const {title,content} = req.body;
    const note = new Note({title,content})

    const savedNote = await note.save();
    res.status(200).json(savedNote);
  } catch (error) {
    console.error("Error in createNote Controller",error);
    res.status(500).json({ message: "Internal server error"});
  }
};

export const updateNote = async (req,res) => {
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,});

        if (!updatedNote) {return res.status(404).json({message: "Note not found"})}

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote Controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const deleteNote = async (req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) {return res.status(404).json({message: "Note not found"})}

        res.status(200).json({message: "Note deleted successsfully"});
    } catch (error) {
        console.error("Error in deleteNote Controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
}