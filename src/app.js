const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let grades = [{
    "id": 1,
    "name": "La Jefa",
    "subject": "Agueda Pimentel",
    "score": 9000000
},{
    "id": 2,
    "name": "Rock solid hard built trader - Infrastructure Engineer",
    "subject": "Fancis R",
    "score": 9000000
},{
    "id": 3,
    "name": "Rock solid hard built trader",
    "subject": "Hamlet R",
    "score": 9000000
},{
    "id": 4,
    "name": "Fort Lauderdale Land Lord",
    "subject": "Hamlet R.",
    "score": 4700000
},{
    "id": 5,
    "name": "Self Made Millionaire USD",
    "subject": "Hamlet R.",
    "score": 90000000
}];

app.get('/grades', (req, res) => {
  console.log('Received GET request for grades');
  res.json(grades);
});

app.get('/grades/:id', (req, res) => {
  const id = Number(req.params.id);

  console.log(`Received GET request for grade id ${id}`);

  const grade = grades.find(u => u.id === id);

  if (!grade) {
    return res.status(404).json({ error: 'Grade not found' });
  }
  res.json(grade);
});

app.post('/grades', (req, res) => {
  const { name, subject, score } = req.body;
  const id = Date.now().toString();
  const newGrade = { id, name, subject, score };
  grades.push(newGrade);
  console.log('Received POST request, added new grade:', newGrade);
  res.json(newGrade);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Grade service is running on port ${port}`);
});


// To get this Node.js API up and running: 
// kickoff deploymentp-2
//
//  First, install the dependencies listed in package.json:
//   npm install
//
// Then, start the API server with:
//   node app.js
//

// Trigger CI/CD pipeline...
