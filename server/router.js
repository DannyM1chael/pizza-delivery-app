const { Router } = require('express');
const router = Router();
const cors = require('cors');
const Item = require('./models/Items');

router.get('/', cors(), async (req, res) => {
  const items = await Item.find({});
  try {
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send('Server error', error);
  }
});

module.exports = router;
