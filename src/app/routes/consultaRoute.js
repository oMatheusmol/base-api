
const router = require('express').Router();
const controller = require('../controllers/consultaController');

//get user by id
router.post ("/", controller.create);

module.exports = app => app.use('/api/v1/consulta', router);