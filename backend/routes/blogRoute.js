const express = require('express');

const router = express.Router();

const {index} = require('../controllers/blogController');

router.get('/', index );




module.exports = router;