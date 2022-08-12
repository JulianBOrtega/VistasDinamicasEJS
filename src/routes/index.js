var express = require('express');
var router = express.Router();

const { index, detail } = require('../controllers/indexController');

router
.get('/', index)
.get('/detalle/:id', detail);

module.exports = router;
