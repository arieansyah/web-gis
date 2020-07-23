var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const MapController = require('../controller/MapController');
router.get('/api/map/data', MapController.polygon);
router.get('/map', MapController.index);

module.exports = router;
