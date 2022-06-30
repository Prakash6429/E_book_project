
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
        const notesInitial = [
            {
              "_id": "62bc5e45b93ef2ef061638a61",
              "user": "62bc10f5de3d2b8bf63dff0c",
              "title": "New Note",
              "description": "Please access the playlist",
              "tag": "You Tube",
              "date": "2022-06-29T14:14:29.546Z",
              "__v": 0
            },
            {
                "_id": "62bc5e45b93ef2ef061638b72",
                "user": "62bc10f5de3d2b8bf63dff1d",
                "title": "Old Note",
                "description": "Please access the old playlist",
                "tag": "Youuu Tubeeee",
                "date": "2022-06-29T14:14:50.546Z",
                "__v": 0
            },
            {
                "_id": "62bc5e45b93ef2ef061638a63",
                "user": "62bc10f5de3d2b8bf63dff0c",
                "title": "New Note",
                "description": "Please access the playlist",
                "tag": "You Tube",
                "date": "2022-06-29T14:14:29.546Z",
                "__v": 0
              },
              {
                  "_id": "62bc5e45b93ef2ef061638b74",
                  "user": "62bc10f5de3d2b8bf63dff1d",
                  "title": "Old Note",
                  "description": "Please access the old playlist",
                  "tag": "Youuu Tubeeee",
                  "date": "2022-06-29T14:14:50.546Z",
                  "__v": 0
              },
              {
                "_id": "62bc5e45b93ef2ef061638a65",
                "user": "62bc10f5de3d2b8bf63dff0c",
                "title": "New Note",
                "description": "Please access the playlist",
                "tag": "You Tube",
                "date": "2022-06-29T14:14:29.546Z",
                "__v": 0
              },
              {
                  "_id": "62bc5e45b93ef2ef061638b76",
                  "user": "62bc10f5de3d2b8bf63dff1d",
                  "title": "Old Note",
                  "description": "Please access the old playlist",
                  "tag": "Youuu Tubeeee",
                  "date": "2022-06-29T14:14:50.546Z",
                  "__v": 0
              },
              {
                "_id": "62bc5e45b93ef2ef061638a67",
                "user": "62bc10f5de3d2b8bf63dff0c",
                "title": "New Note",
                "description": "Please access the playlist",
                "tag": "You Tube",
                "date": "2022-06-29T14:14:29.546Z",
                "__v": 0
              }
          ]

          const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;