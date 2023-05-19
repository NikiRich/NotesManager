import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTrashAlt, faEdit, faEye} from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Note Manager</h1>
            <div className="home-container">

                <div className="option">
                    <FontAwesomeIcon icon={faPlusSquare} size="3x"/>
                    <Link className="button-starting" to="/add">Add Note</Link>
                </div>
                <div className="option">
                    <FontAwesomeIcon icon={faEdit} size="3x"/>
                    <Link className="button-starting" to="/update">Update Note</Link>
                </div>
                <div className="option">
                    <FontAwesomeIcon icon={faTrashAlt} size="3x"/>
                    <Link className="button-starting" to="/delete">Delete Note</Link>
                </div>
                <div className="option">
                    <FontAwesomeIcon icon={faEye} size="3x"/>
                    <Link className="button-starting" to="/display">Display Notes</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
