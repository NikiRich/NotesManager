import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const DeleteNote = () => {
    const [id, setId] = useState('');
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

    const deleteNote = async () => {
        const response = await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            setId('');
        }
    };

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <h2 id="header">Current Notes</h2>
            {notes.map(note => (
                <p key={note.id}>{note.id}. {note.text}</p>
            ))}
            <input
                type="number"
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="Note's ID number"
            />
            <div className="form-container">
                <div className="form-container2">
                    <button onClick={deleteNote} className="button-ending">Delete note</button>
                </div>
                <button onClick={refreshPage} className="button-ending">Refresh</button>
                <Link className="button-ending" to="/">Home</Link>
            </div>
        </div>
    );
};

export default DeleteNote;

