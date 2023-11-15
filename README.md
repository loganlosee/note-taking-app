# Note Taker App

A simple note-taking application to help you organize your thoughts and tasks.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, save, and delete notes.
- User-friendly interface with a list of existing notes and a form to add new ones.
- Seamless integration with a back-end server for storing and retrieving notes.

## Installation
1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/note-taker-app.git
2. Navigate to the project directory.
   cd note-taker-app

3. Install dependencies.
   npm install

4. Start the server.
   node server.js

5. Open your web browser and go to http://localhost:3000 to access the app.

## Usage
- Access the app through your web browser.
- Click on "Get Started" to go to the notes page.
- Enter a note title and text in the right-hand column.
- Click "Save Note" to save the note.
- Click on an existing note in the left-hand column to view or edit it.
- Use the "New Note" button to start a new note.
- Click on the "Clear Form" button to clear the form.

## links
- heroku https://note-taking-app-logan-losee-2c63a73aad3d.herokuapp.com/
- github https://github.com/loganlosee/note-taking-app

## API Routes
- GET /api/notes: Retrieve all saved notes.
- POST /api/notes: Save a new note.
- DELETE /api/notes/:id: Delete a note with the specified ID.

## File Structure
- public: Front-end files (HTML, CSS, and JavaScript).
- routes: Server-side route handling.
- db.json: JSON file for storing notes data.
- server.js: Main server file.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.