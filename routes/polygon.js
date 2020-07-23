var express = require('express');
var router = express.Router();

const PolygonController = require('../controller/PolygonController');

router.post('/create', PolygonController.create);

module.exports = router;