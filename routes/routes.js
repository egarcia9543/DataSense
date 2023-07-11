const express = require('express');
const functions = require('../controller/functions');

const router = express.Router();


router.get('/', functions.landingPage);


module.exports = router