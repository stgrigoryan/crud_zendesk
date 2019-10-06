const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date },
  address: { type: String },
  address2: { type: String },
  country: { type: String },
  city: { type: String },
  postalCode: { type: Number },
  legal: { type: String },
  package: { type: String }
});

module.exports = mongoose.model('User', schema);
