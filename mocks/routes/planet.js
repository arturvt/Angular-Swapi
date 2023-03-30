const express = require('express');
const router = express.Router();
const { results } = require('../data/planet.json');

router.get('/', (_, res) => {
  res.json({
    total: results.length,
    results
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(results[id]);
})
module.exports = router;
