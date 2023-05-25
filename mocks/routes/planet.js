const express = require('express');
const router = express.Router();
const { results } = require('../data/planet.json');

const planets_page_01 = require('../data/planets/planets-page-1.json');
const planets_page_02 = require('../data/planets/planets-page-2.json');
const planets_page_03 = require('../data/planets/planets-page-3.json');
const planets_page_04 = require('../data/planets/planets-page-4.json');
const planets_page_05 = require('../data/planets/planets-page-5.json');


router.get('/', (req, res) => {
  let page = req.query.page;
  switch (page) {
    case '5': return res.json(planets_page_05);
    case '4': return res.json(planets_page_04);
    case '3': return res.json(planets_page_03);
    case '2': return res.json(planets_page_02);
    case '1':
    default: {
      return res.json(planets_page_01);
    }
  }
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(results[id]);
})
module.exports = router;
