import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UpdateNote = () => {
    const [id, setId] = useState('');
    const [text, setText] = useState('');
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

    const updateNote = async () => {
        const response = await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            setId('');
            setText('');
        }
    };

    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <h2 id="header">Current notes</h2>
            {notes.map(note => (
                <p key={note.id}>{note.id}. {note.text}</p>
            ))}
            <input
                type="number"
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="ID to update"
            />
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="New text"
            />
            <div className="form-container">
                <div className="form-container2">
                    <button onClick={updateNote} className="button-ending">Update note</button>
                </div>
                <button onClick={refreshPage} className="button-ending">Refresh</button>
                <Link className="button-ending" to="/">Home</Link>
            </div>
        </div>
    );
};

export default UpdateNote;

