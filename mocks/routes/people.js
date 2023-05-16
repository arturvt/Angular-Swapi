const express = require('express');
const router = express.Router();
const { results } = require('../data/people.json');

router.get('/', (req, res) => {
  let page = req.query.page;
  console.log(`get page ${page}`);
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
