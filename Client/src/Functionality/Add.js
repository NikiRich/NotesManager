import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';

const AddNote = () => {
    const [text, setText] = useState('');

    const addNote = async () => {
        const note = {text};

        const response = await fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        });

        if (response.ok) {
            setText('');
        }
    };

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Write a note"/>
            <div className="form-container">
                <div className="form-container2">
                    <button onClick={addNote} className="button-ending">Add note</button>
                </div>
                <Link className="button-ending" to="/">Home</Link>
            </div>
        </div>
    );
};

export default AddNote;
