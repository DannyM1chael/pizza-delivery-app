const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const PORT = process.env.PORT || 4000;
const app = express();
const router = require('./router');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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
