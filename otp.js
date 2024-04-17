const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql2 = require('mysql2');
const randomstring = require('randomstring');

// Initialize Express app
const app = express();

// // Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'student'
});

// Connect to MySQL
connection.connect();

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shoppingkartty@gmail.com',
    pass: 'ewutfujrxhimzeuj'
  }
});

// Generate OTP
function generateOTP() {
  return randomstring.generate({
    length: 6,
    charset: 'numeric'
  });
}

// Send OTP via email
function sendOTP(email, otp) {
  const mailOptions = {
    from: 'shoppingkartty@gmail.com',
    to: email,
    subject: 'Email Verification OTP',
    text: `Your OTP for email verification is: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Route to request OTP
app.post('/sendotp', (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  // Store OTP in the database
  connection.query('INSERT INTO otp (email, otp) VALUES (?, ?)', [email, otp], (error, results) => {
    if (error) {
      console.log('Error storing OTP:', error);
      res.status(500).send('Internal server error');
    } else {
      sendOTP(email, otp);
      res.status(200).send('OTP sent successfully');
    }
  });
});


// Route to verify OTP
app.get('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  // Verify OTP from the database
  connection.query('SELECT * FROM otp WHERE email = ? AND otp = ?', [email, otp], (error, results) => {
    if (error) {
      console.log('Error verifying OTP:', error);
      res.status(500).send('Internal server error');
    } else {
      if (results.length > 0) {
        // Update user status as verified
        connection.query('UPDATE otp SET otp_verified = 1 WHERE email = ?', [email], (error, results) => {
          if (error) {
            console.log('Error updating user status:', error);
            res.status(500).send('Internal server error');
          } else {
            // Send email notification
            const confirmationText = 'Your email address has been verified successfully.';
            const notificationMailOptions = {
              from: 'shoppingkartty@gmail.com',
              to: email,
              subject: 'Email Address Verified',
              text: confirmationText
            };
            //   const notificationMailOptions = {
            //     from: 'your_email@gmail.com',
            //     to: 'notification_recipient@example.com', // Change to your desired recipient email address
            //     subject: 'Email Verified Notification',
            //     text: `The email ${email} has been verified successfully.`
            //   };

            transporter.sendMail(notificationMailOptions, (error, info) => {
              if (error) {
                console.log('Error sending email notification:', error);
              } else {
                console.log('Email notification sent:', info.response);
              }
            });

            res.status(200).send('Email verified successfully');
          }
        });
      } else {
        res.status(400).send('Invalid OTP');
      }
    }
  });
});


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
