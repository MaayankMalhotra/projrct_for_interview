const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true, // Ensure that 'firstName' is required
    },
    lastName: {
      type: String,
      required: true, // Ensure that 'lastName' is required
    },
    email: {
      type: String,
      required: true, // Ensure that 'email' is required
      unique: true,
    },
    // Other fields...
  });
  


const User = mongoose.model('User', userSchema);


app.post('/submit', async (req, res) => {
    try {
      const { firstName, lastName, email } = req.body;
  
      // Check if required fields are provided
    //   if (!firstName || !lastName || !email) {
    //     return res.status(400).json({ message: 'Missing required fields' });
    //   }
  
      // Create and save the user document
      const newUser = new User({ firstName, lastName, email });
      await newUser.save();
  
      console.log('User saved successfully');
      res.status(200).json({ message: 'User saved successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
