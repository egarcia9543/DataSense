const express = require('express');
const functions = require('../controller/functions');

const router = express.Router();


router.get('/', functions.landingPage);
router.get('/about', functions.aboutPage);
router.get('/tools', functions.toolsPage);

module.exports = router