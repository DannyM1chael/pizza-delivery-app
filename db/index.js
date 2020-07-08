const mongoose = require('mongoose');
const config = require('config');

mongoose
  .connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => {
    console.log('Server error', error.message);
    process.env(1);
  });

const db = mongoose.connection;

module.exports = db;
