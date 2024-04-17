const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
// const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3045;

// Database configuration
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'login'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Middleware
app.use(bodyParser.json());

// API endpoint to send OTP to a phone number
app.post('/api/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    // Generate a random OTP
    const generatedOTP = generateOTP();

    // Store phone number and generated OTP in the database
    const sql = 'INSERT INTO otp_logs (phone_number, otp) VALUES (?, ?)';
    db.query(sql, [phoneNumber, generatedOTP], (err, result) => {
      if (err) {
        console.error('Error storing OTP to database:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      console.log('OTP stored to database');

      // Send the generated OTP to the client
      res.status(200).json({phone_number: phoneNumber, otp: generatedOTP });
    });
  } catch (error) {
    console.error('Error generating OTP:', error);
    res.status(500).json({ error: 'Error generating OTP' });
  }
});

// Function to generate a random OTP
function generateOTP() {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
