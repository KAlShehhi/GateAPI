const express = require('express');
const router = express.Router();

const {entry, exit} = require('../controllers/gateController');

router.route('/entry/:gymID/:userID').get(entry);
router.route('/exit/:gymID/:userID').get(exit);


module.exports = router;