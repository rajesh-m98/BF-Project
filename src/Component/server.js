// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST route to initiate OTP sending
app.post('/login', (req, res) => {
  const { email } = req.body;
  const otp = generateOTP(); // Implement generateOTP function

  // Send OTP to email
  sendOTP(email, otp)
    .then(() => {
      res.json({ success: true, message: 'OTP sent to email' });
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      res.status(500).json({ success: false, message: 'Failed to send OTP' });
    });
});

// POST route to verify OTP
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  // Verify OTP
  if (verifyOTP(email, otp)) {
    res.json({ success: true, message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Function to send OTP to email
async function sendOTP(email, otp) {
  // Configure nodemailer with your email service provider
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Send email with OTP
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Login OTP',
    text: `Your OTP for login verification is: ${otp}`,
  });
}

// Function to generate random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
}

// Function to verify OTP (dummy implementation, replace with database check)
function verifyOTP(email, otp) {
  // Dummy implementation: always return true for demo purposes
  return true;
}
