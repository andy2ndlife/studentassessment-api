var express = require('express');
var router = express.Router();

var constants = require('../lib/constants')

/* GET all measurement Units */
router.get('/', function(req, res, next) {
    res.json(constants.UNITS);
});

module.exports = router;