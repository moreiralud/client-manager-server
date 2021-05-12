const express = require('express');
const helper = require('../helper')
const router = express.Router();
const clientService = require('../services/cliente');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await clientService.getAllClients(req.query.page));
  } catch (err) {
    console.error(`Error while getting clients `, err.message);
    next(err);
  }
});

module.exports = router;