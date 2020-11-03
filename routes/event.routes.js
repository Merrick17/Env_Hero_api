const router = require('express').Router()
const EventController = require('../controllers/event.controller')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  },
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const upload = multer({ storage: storage, fileFilter: fileFilter })

router.get('/', EventController.getAllEvents)
router.post('/create', upload.single('image'), EventController.addEvent)
router.delete('/:id/delete', EventController.deleteEvent)
router.put('/:id/update', EventController.updateEvent)

module.exports = router
