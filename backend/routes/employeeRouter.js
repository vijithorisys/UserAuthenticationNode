
const express = require('express');
const employeeRouter = express.Router();
const { getAll } = require('../controllers/employeeController');

employeeRouter.get('',getAll)

module.exports= employeeRouter