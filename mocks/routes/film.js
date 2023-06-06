const express = require('express');
const router = express.Router();
const films = require('../data/films/films-page1.json');

router.get('/', (_, res) => {
  return res.json(films);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(films.results[id - 1]);
});
module.exports = router;
