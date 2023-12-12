const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('open', () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = mongoose;
