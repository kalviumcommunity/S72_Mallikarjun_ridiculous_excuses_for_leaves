const express = require('express');
const router = express.Router();
const leaveController = require('./controllers/leaveController');

router.post('/excuses', leaveController.createExcuse);
router.get('/excuses', leaveController.getAllExcuses);
router.get('/excuses/:id', leaveController.getExcuseById);
router.put('/excuses/:id', leaveController.updateExcuse);
router.delete('/excuses/:id', leaveController.deleteExcuse);

module.exports = router;
