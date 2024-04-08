const express = require('express');
const router = express.Router();

const {entry, exit} = require('../controllers/gateController');

router.route('/entry').post(entry);
router.route('/exit').post(exit);


module.exports = router;