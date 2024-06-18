// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware
app.use(bodyParser.json());

// Create route
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  const comments = fs.readFileSync('comments.json');
  const commentsJSON = JSON.parse(comments);
  commentsJSON.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(commentsJSON));
  res.send('Comment added');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});