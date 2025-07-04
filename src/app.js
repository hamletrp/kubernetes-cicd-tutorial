const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let grades = [{
    "name": "Rock solid hard built trader",
    "subject": "Hamlet R",
    "score": 9000000
},{
    "name": "Fort Lauderdale Land Lord",
    "subject": "Hamlet R.",
    "score": 4700000
},{
    "name": "Self Made Millionaire USD",
    "subject": "Hamlet R.",
    "score": 90000000
}];

app.get('/grades', (req, res) => {
  console.log('Received GET request for grades');
  res.json(grades);
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
