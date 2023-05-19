import React, { useState, useEffect } from 'react';
import '../App.scss';
import { Link } from "react-router-dom";

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            const response = await fetch('http://localhost:5000/notes');

            if (response.ok) {
                const notes = await response.json();
                setNotes(notes);
            }
        };

        getNotes();
    }, []);

    return (
        <div>
            <h2 id="header">My notes</h2>
            {notes.map(note => (
                <p key={note.id}>{note.id}. {note.text}</p>
            ))}
            <div className="form-container">
                <Link className="button-ending" to="/">Home</Link>
            </div>
        </div>
    );
};

export default NoteList;
