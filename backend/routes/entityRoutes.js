const express = require('express');
const { getEntities } = require('../controllers/entityController');

const router = express.Router();

router.get('/', getEntities);

module.exports = router;
