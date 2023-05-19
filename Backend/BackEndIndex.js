const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let notes = [
    {id: 1, text: 'Need to order burgers for the party'},
    {id: 2, text: 'Call Sara to discuss the project'},
    {id: 3, text: 'Pay electricity bill'},
];
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/notes', (req, res) => {
    res.json(notes);
});

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).end();
    }
});

app.post('/notes', (req, res) => {
    const note = req.body;
    note.id = Math.max(...notes.map(note => note.id)) + 1;
    notes = [...notes, note];

    res.json(note);
});

app.put('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const newNote = req.body;

    notes = notes.map(note => note.id !== id ? note : newNote);
    res.json(newNote);
});

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);

    res.status(204).end();
});


