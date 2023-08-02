const express = require('express');
const functions = require('../controller/functions');

const router = express.Router();


router.get('/', functions.landingPage);
router.get('/about', functions.aboutPage);
router.get('/tools', functions.toolsPage);
router.get('/tools/tableau', functions.tableauPage);
router.get('/learn', functions.learnPage);
router.get('/resources', functions.resourcesPage);
router.get('/contact', functions.contactPage);
router.post('/sendmail', functions.sendEmail);

module.exports = router