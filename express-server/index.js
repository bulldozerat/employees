const express = require('express');
const cors = require('cors');
const app = express();

// JSON data
const companies = require('./jsons/companies.json');
const companyAddresses = require('./jsons/company-addresses.json');
const employees = require('./jsons/employees.json');
const projects = require('./jsons/projects.json');

const allowedOrigins = ['http://localhost:8080'];

app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

app.get('/companies', function(req, res) {
  res.json(companies);
});

app.get('/companyAddresses', function(req, res) {
  res.json(companyAddresses);
});

app.get('/employees', function(req, res) {
  res.json(employees);
});

app.get('/projects', function(req, res) {
  res.json(projects);
});

app.listen('5000', function() {
  console.log('Listening to port 5000');
});
