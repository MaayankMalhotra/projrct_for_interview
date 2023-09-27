const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userSchema = new mongoose.Schema({
    
  "firstName": {
    "type": "string",
    "minLength": 1,
    "maxLength": 255,
    "pattern": "^[a-zA-Z]+$"
  },
  "lastName": {
    "type": "string",
    "minLength": 1,
    "maxLength": 255,
    "pattern": "^[a-zA-Z]+$"
  },
  "email": {
    "type": "string",
    "minLength": 5,
    "maxLength": 255,
    "pattern": "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-z]{2,3}$"
  },
  "country": {
    "type": "string",
    // "enum": ["Country 1", "Country 2", "Country 3"]
  },
  "state": {
    "type": "string",
    // "enum": ["State 1", "State 2", "State 3"]
  },
  "city": {
    "type": "string",
    // "enum": ["City 1", "City 2", "City 3"]
  },
  "gender": {
    "type": "string",
    "enum": ["Male", "Female"]
  },
  "dateOfBirth": {
    "type": "string",
    "format": "date"
  },
  


  });
  


const User = mongoose.model('User', userSchema);


app.post('/submit', async (req, res) => {
    try {
      console.log('hitting the route')
      const {firstName,lastName,email,country,state,city,gender,dateOfBirth} = req.body;
  
     
      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      
      const newUser = new User({firstName,lastName,email,country,state,city,gender,dateOfBirth});
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
