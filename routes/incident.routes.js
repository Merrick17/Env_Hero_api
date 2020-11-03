const express = require('express')
const verifToken = require('../utils/verifyToken')
const incidentController = require('../controllers/incident.controller')
const router = express.Router()

router.post('/create', verifToken, incidentController.addIncident)
router.delete('/delete/:id', verifToken, incidentController.deleteIncident)
router.get('/', verifToken, incidentController.getAllIncidents)
router.get('/:userid', verifToken, incidentController.getAllIncidentsByUser)

module.exports = router