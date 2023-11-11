const path = require('path');

module.exports = (app) => {
  // GET /notes - Return the notes.html file
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

  // GET * - Return the index.html file (default route)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
};