const express = require('express');
const router = express.Router();

//Add controllers here
// const testController = require('../controllers/testController');

//
router.get('/', (req, res) => {
  res.status(200).json({})
});

module.exports = router;
