const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // GET /api/notes - Read and return all saved notes as JSON
  app.get('/api/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'));
    res.json(data);
  });

  // POST /api/notes - Receive a new note, add it to the db.json file, and return the new note
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'));

    // Generate a unique ID for the new note (you can use npm packages like 'uuid' or simply use a timestamp)
    newNote.id = Date.now();

    data.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(data, null, 2));

    res.json(newNote);
  });
};
