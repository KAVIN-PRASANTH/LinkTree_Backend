// routes/checkRoutes.js
const express = require('express');
const router = express.Router();
const checkController = require('../controllers/datacontroller');

router.post('/api/addLink', checkController.addLink);
router.get('/api/authentication', checkController.authentication);
router.get('/api/getData', checkController.getData);
router.delete('/api/deleteLink', checkController.deleteLink);
router.patch('/api/editLink', checkController.editLink);



module.exports = router;
