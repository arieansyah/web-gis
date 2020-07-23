var express = require('express');
var router = express.Router();

let tableMigration = require('../migration/tableMigration');

router.post('/table', tableMigration.create);

module.exports = router;