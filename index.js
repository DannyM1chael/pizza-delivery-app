const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./db');
const itemRouter = require('./routes');

const app = express();
app.use(cors());

db.on('error', console.error.bind(console, 'MongoDb connection error:'));

app.use('/api', itemRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
