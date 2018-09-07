var express = require('express');
var router = express.Router();
var journeyController = require('../controllers/journeyController')

router.post('/', journeyController.create)
router.get('/', journeyController.all)
// router.get('/:id', journeyController.detail)

module.exports = router;
