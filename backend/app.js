// Import required modules
const express = require('express');
const {sequelize}=require("./sequelize")
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRouter');
const employeeRouter = require('./routes/employeeRouter');


// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Use CORS middleware
app.use(cors());

// Use body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//Routing
app.use('/auth',authRouter)
app.use('/employee',employeeRouter)

// Start the server and listen on port 3000
const PORT = process.env.PORT || 6000
app.listen(PORT,async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
