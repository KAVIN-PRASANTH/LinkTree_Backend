// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./database');
const cors=require('cors');
const checkRoutes = require('./routes/dataroutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', checkRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
