var express = require('express');
var router = express.Router();
var classroomController = require('../controllers/classroomController')

router.post('/', classroomController.create)
router.get('/', classroomController.find)

module.exports = router;
