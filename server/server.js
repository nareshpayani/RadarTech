const cors = require("cors");
const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql2')
const fileUpload = require('express-fileupload');
const nodemailer = require("nodemailer");

const publicPath = path.join(__dirname, '..', 'build');

const { DB, PORT, HOST } = require("./config");
const port = PORT || 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(publicPath));
app.use(cors());
app.use(fileUpload({
   limits: { fileSize: 50 * 1024 * 1024 },
 }));

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

app.post('/review', async (req, res) => {
   const review = req.body
   let picture;
   let uploadPath;
   let err
   if (req.files) {
      picture = req.files.picture;
      uploadPath = path.join(__dirname, '..', 'public/assets/uploads/') + picture.name;
      err = await picture.mv(uploadPath);
   }
   connection.query('INSERT INTO Review (course_id, user_name, email, review_text, stars, imgUrl) VALUES (?,?,?,?,?,?)', 
   [Number(review.courseId), review.name, review.email, review.text, Number(review.stars), picture ? picture.name : '' ],(error, results) => {
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

app.get('/feedbackAll', (req, res) => {
   connection.query('SELECT * FROM Feedback', (error, results) => {
      if (error) return res.json({ error: error });
      return res.send(results).status(200)
   });
})

app.post('/feedback', async (req, res) => {
   const feedback = req.body
   let picture,uploadPath;
   if (req.files) {
      picture = req.files.picture;
      uploadPath = path.join(__dirname, '..', 'public/assets/uploads/') + picture.name;
      await picture.mv(uploadPath);
   }
   connection.query('INSERT INTO Feedback (user_name, email, company, feedback_text, address, salary, imgUrl) VALUES (?,?,?,?,?,?,?)', 
   [feedback.name, feedback.email, feedback.company, feedback.text, feedback.address, Number(feedback.salary), picture ? picture.name : '' ],(error, results) => {
      if (error) return res.json({ error: error });
      return res.send(feedback).status(200)
   });
})

/// contact

app.post('/contact', async (req, res) => {
   const contact = req.body
   try {
      await sendMail(contact)
      return res.send(contact).status(200)
   }catch (err) {
      return res.send(err).status(500)
   } 
})

/// email 
async function sendMail(contact) {
   let testAccount = await nodemailer.createTestAccount();
 
   let transporter = nodemailer.createTransport({
     host: "smtp.ethereal.email",
     port: 587,
     secure: false, // true for 465, false for other ports
     auth: {
       user: testAccount.user, // generated ethereal user
       pass: testAccount.pass, // generated ethereal password
     },
   });
 
   let info = await transporter.sendMail({
     from: '"Fred Foo 👻" <foo@example.com>', // sender address
     to: "bar@example.com, baz@example.com", // list of receivers
     subject: "Radar Contact Message", // Subject line
     html: `
      <b>subject: ${contact.subject},</b></br></br>
      <b>Email: ${contact.email},</b></br></br>
      <b>Message: ${contact.message},</b></br></br>
     `,
   });
 
   console.log("Message sent: %s", info.messageId);
   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 }
 
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

const startApp = async () => {

   app.listen(port, () => {
      console.log('Server is up!',port,publicPath);
   });
   
};
startApp();