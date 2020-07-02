const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    unique: true,
  },
  types: {
    type: Array,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = model('Item', schema);
