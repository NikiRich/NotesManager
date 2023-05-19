import React, {useState} from 'react';
import {Link} from "react-router-dom";

const UpdateNote = () => {
    const [id, setId] = useState('');
    const [text, setText] = useState('');

    const updateNote = async () => {
        const note = {id: Number(id), text};

        const response = await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        });

        if (response.ok) {
            setId('');
            setText('');
        }
    };

    return (
        <div>
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
                <Link className="button-ending" to="/">Home</Link>
            </div>
        </div>
    );
};

export default UpdateNote;
