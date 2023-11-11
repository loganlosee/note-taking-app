const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API routes
app.get('/db/db.json', (req, res) => {
  // Read the notes from the db.json file and return them as JSON
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
  res.json(notes);
});

app.post('/db/db.json', (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));

  // Assign a unique ID to the new note (e.g., using a timestamp)
  newNote.id = Date.now();

  // Add the new note to the array
  notes.push(newNote);

  // Write the updated notes back to the db.json file
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes, null, 2));

  // Send the new note as a response
  res.json(newNote);
});

// HTML routes
app.get('/notes', (req, res) => {
  // Return the notes.html file
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) => {
  // Return the index.html file for all other routes (default)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
