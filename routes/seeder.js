var express = require('express');
var router = express.Router();

let dataSeed = require('../seeder/dataSeed');

router.post('/seed', dataSeed.create);

module.exports = router;