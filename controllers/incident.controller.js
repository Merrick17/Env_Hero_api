const Incident = require('../models/incident.model')

module.exports.addIncident = async (req, res) => {
  let newIncident = new Incident({
    type: req.body.type,
    lat: req.body.lat,
    lng: req.body.lng,
    imageUrl: req.body.image,
    addedBy: req.body.user,
  })
  let result = await newIncident.save()
  res.json({
    message: 'Incident Added..',
  })
}

module.exports.getAllIncidents = async (req, res) => {
  let result = await Incident.find().populate('addedBy')
  res.json({
    message: result,
  })
}

module.exports.deleteIncident = async (req, res) => {
  let result = await Incident.findByIdAndDelete(req.params.id)
  res.json({
    message: 'Deleted...',
  })
}

module.exports.getAllIncidentsByUser = async (req, res) => {
  let result = await Incident.findById(req.params.userid)
  res.json({
    message: result,
  })
}
