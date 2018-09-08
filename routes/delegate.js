var express = require('express');
var router = express.Router();
var delegateController = require('../controllers/delegateController')

router.post('/', delegateController.create)
router.get('/', delegateController.find)

module.exports = router;
