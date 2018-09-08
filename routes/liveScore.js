var express = require('express');
var router = express.Router();
var liveScoreController = require('../controllers/liveScoreController')

router.post('/', liveScoreController.create)
router.get('/', liveScoreController.all)

module.exports = router;
