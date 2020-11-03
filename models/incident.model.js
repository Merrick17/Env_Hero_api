const mongoose = require('mongoose')

const IncidentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Incident', IncidentSchema)
