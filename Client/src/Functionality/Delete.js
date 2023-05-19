import React, {useState} from 'react';
import {Link} from "react-router-dom";

const DeleteNote = () => {
    const [id, setId] = useState('');

    const deleteNote = async () => {
        const response = await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            setId('');
        }
    };

    return (
        <div>
            <input
                type="number"
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="ID to delete"
            />
            <div className="form-container">
                <div className="form-container2">
                    <button onClick={deleteNote} className="button-ending">Delete note</button>
                </div>
                <Link className="button-ending" to="/">Home</Link>
            </div>
        </div>
    );
};

export default DeleteNote;
