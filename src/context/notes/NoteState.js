
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
  const host = "http://localhost:5000"
        const notesInitial = []

          const [notes, setNotes] = useState(notesInitial)

          // Get all notes
          const getNotes = async () =>{
            // TODO : API Call
            // API Call
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYzEwZjVkZTNkMmI4YmY2M2RmZjBjIn0sImlhdCI6MTY1NjY2MTM3MX0.Aju4-dL9wz5jhblOPcNIQUmG6QjecQN0NGyRwBdq6e4"
              }
            });
            const json = await response.json()
            console.log(json);
            setNotes(json)
            
          }


          // Add a Note
          const addNote = async (title, description, tag) =>{
            // TODO : API Call
            // API Call
            const response = await fetch(`${host}/api/notes/addnote`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYzEwZjVkZTNkMmI4YmY2M2RmZjBjIn0sImlhdCI6MTY1NjY2MTM3MX0.Aju4-dL9wz5jhblOPcNIQUmG6QjecQN0NGyRwBdq6e4"
              },
              body: JSON.stringify({title, description, tag})
            });

            console.log("Adding a New Note");
            const note = {
              "_id": "62bc5e45b93ef2ef061638a67",
              "user": "62bc10f5de3d2b8bf63dff0c",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2022-06-29T14:14:29.546Z",
              "__v": 0
            };
            setNotes(notes.concat(note));
          }
          // Delete a Note
          const deleteNote = async (id) =>{
            // TODO : API Call
              // API Call
              const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYzEwZjVkZTNkMmI4YmY2M2RmZjBjIn0sImlhdCI6MTY1NjY2MTM3MX0.Aju4-dL9wz5jhblOPcNIQUmG6QjecQN0NGyRwBdq6e4"
                },
                
              });
              const json = response.json();
            // console.log("Deleting the note with id" + id)
            const newNotes = notes.filter((note)=> {return note._id!==id})
            setNotes(newNotes)
          }
          // Edit a Note
          const editNote = async (id, title, description, tag) =>{
            // API Call
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYzEwZjVkZTNkMmI4YmY2M2RmZjBjIn0sImlhdCI6MTY1NjY2MTM3MX0.Aju4-dL9wz5jhblOPcNIQUmG6QjecQN0NGyRwBdq6e4"
              },
              body: JSON.stringify({title, description, tag})
            });
            const json = response.json();
          
            //Logic to edit in client
            for (let index = 0; index < notes.length; index++) {
              const element = notes[index];
              if(element._id===id){
                element.title = title;
                element.description = description;
                element.tag = tag;
              }
            }
          }

    return(
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;