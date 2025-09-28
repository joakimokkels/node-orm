'use strict';

const router = require('express').Router();
const DatabasesController = require('../controllers/DatabasesController');

module.exports = () => {
  router.get('/status', (req, res) => res.status(200).json({ status: 'ok' }));

  router.get('/', DatabasesController.Index);
  router.get('/add', DatabasesController.Add);
  router.post('/add', DatabasesController.AddPost);
  return router;
};
