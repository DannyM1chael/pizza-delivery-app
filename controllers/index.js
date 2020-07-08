const Item = require('../models/Items');

getAllItems = async (req, res) => {
  const items = await Item.find({});
  try {
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send('Server error', error);
  }
};

module.exports = { getAllItems };
