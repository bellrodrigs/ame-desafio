'use strict';

const express = require('express');
const router = express.Router();
const PlannetController = require('../controllers/plannets-controller');

router.get('/', PlannetController.get);
router.get('/:id', PlannetController.getById);
router.get('/name/:name', PlannetController.getByName);
router.post('/', PlannetController.post);
router.delete('/', PlannetController.delete);



module.exports = router;