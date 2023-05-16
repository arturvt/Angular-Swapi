const express = require('express');
const router = express.Router();
const { results } = require('../data/people.json');

const people_page_01 = require('../data/people/people-page-1.json');
const people_page_02 = require('../data/people/people-page-2.json');
const people_page_03 = require('../data/people/people-page-3.json');
const people_page_04 = require('../data/people/people-page-4.json');
const people_page_05 = require('../data/people/people-page-5.json');

router.get('/', (req, res) => {
  let page = req.query.page;
  console.log(`!get page ${page}`);
  switch (page) {
    case '5': return res.json(people_page_05);
    case '4': return res.json(people_page_04);
    case '3': return res.json(people_page_03);
    case '2': return res.json(people_page_02);
    case '1':
    default: {
      return res.json(people_page_01);
    }
  }

});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(results[id-1]);
})
module.exports = router;
