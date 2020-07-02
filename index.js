const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const PORT = config.get('port') || 4000;
const app = express();
const router = require('./router');

async function startDb() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (error) {
    console.log('Server error', error.message);
    process.env(1);
  }
}

startDb();
app.use(router);
