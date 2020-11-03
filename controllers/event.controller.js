const Event = require('../models/event.model')

module.exports.addEvent = async (req, res) => {
  try {
    let newEvent = Event({
      title: req.body.title,
      description: req.body.desc,
      datEvent: req.body.dareEvent,
      eventImage: req.req.file.path,
      addedBy: req.body.addedBy,
    })
    let result = await newEvent.save()
    return res.status(200).json({
      msg: 'Event Added',
    })
  } catch (error) {
    res.json(error)
  }
}

module.exports.getAllEvents = async (req, res) => {
  try {
    let result = await Event.find()
    return res.status(200).json({
      Events: result,
    })
  } catch (error) {
    return res.json(error)
  }
}

module.exports.updateEvent = async (req, res) => {
  try {
    let id = req.params.id
    let updatingData = req.body
    let result = await Event.findByIdAndUpdate(id, updatingData, { new: true })
    return res.status(200).json(result)
  } catch (ex) {
    return res.json(ex)
  }
}

module.exports.deleteEvent = async (req, res) => {
  try {
    let id = req.params.id

    let result = await Event.findByIdAndRemove(id)
    return res.status(200).json(result)
  } catch (ex) {
    return res.json(ex)
  }
}
