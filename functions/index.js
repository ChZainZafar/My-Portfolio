const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "aqeelzafar195@gmail.com", // generated ethereal user
    pass: "gqhvqwipbrwfaanx", // generated ethereal password
  },
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    let { username, email, subject, message } = req.body;

    try {
      await transporter.sendMail({
        from: `${username} <${email}>`, // sender address
        to: "chzainzafar19@gmail.com", // list of receivers
        subject: subject, // Subject line
        text: `${username} , ${email} ,
      ${subject} ,
      ${message}`, // plain text body
      });
      res.send("email sent");
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  });
});
