const cors = require("cors");
const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql2')

const publicPath = path.join(__dirname, '..', 'build');

const { DB, PORT, HOST } = require("./config");
const port = PORT || 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(publicPath));
app.use(cors());

const connection = mysql.createConnection({
   host: HOST,
   user: 'root',
   database: DB,
   multipleStatements: true,
});

connection.connect((err)=> {
   console.log(err ? "faild" : "connected")
})

/// Review 
app.get('/review/:id', (req, res) => {
   const courseId = req.params.id
   connection.query('SELECT * FROM Review WHERE course_id = ' + courseId, (error, results) => {
      if (error) return res.json({ error: error });
      return res.send(results).status(200)
   });
})

app.post('/review', (req, res) => {
   const review = req.body
   connection.query('INSERT INTO Review (course_id, user_name, email, review_text, stars) VALUES (?,?,?,?,?)', 
   [Number(review.courseId), review.name, review.email, review.text, Number(review.stars)],(error, results) => {
      if (error) return res.json({ error: error });
      return res.send(review).status(200)
   });
})

/// Feedback 
app.get('/feedback', (req, res) => {
   connection.query('SELECT * FROM Feedback LIMIT 10', (error, results) => {
      if (error) return res.json({ error: error });
      return res.send(results).status(200)
   });
})

app.post('/feedback', (req, res) => {
   const feedback = req.body
   connection.query('INSERT INTO Feedback (user_name, email, company, feedback_text, address) VALUES (?,?,?,?,?)', 
   [feedback.name, feedback.email, feedback.company, feedback.text, feedback.address],(error, results) => {
      if (error) return res.json({ error: error });
      return res.send(feedback).status(200)
   });
})


app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

const startApp = async () => {

   app.listen(port, () => {
      console.log('Server is up!',port,publicPath);
   });
   
};
startApp();