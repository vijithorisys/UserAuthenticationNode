
const express = require('express');
const employeeRouter = express.Router();
const { getAll } = require('../controllers/employeeController');
const { employeeAuth } = require('../middlware/employeeAuth');

employeeRouter.get('',employeeAuth, getAll)

module.exports= employeeRouter