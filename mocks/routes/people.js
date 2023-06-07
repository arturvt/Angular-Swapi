const express = require('express');
const router = express.Router();
// const { results } = require('../data/people.json');

const people_page_01 = require('../data/people/people-page-1.json');
const people_page_02 = require('../data/people/people-page-2.json');
const people_page_03 = require('../data/people/people-page-3.json');
const people_page_04 = require('../data/people/people-page-4.json');
const people_page_05 = require('../data/people/people-page-5.json');
const people_page_06 = require('../data/people/people-page-6.json');
const people_page_07 = require('../data/people/people-page-7.json');
const people_page_08 = require('../data/people/people-page-8.json');

const results = [].concat(
  people_page_01.results,
  people_page_02.results,
  people_page_03.results,
  people_page_04.results,
  people_page_05.results,
  people_page_06.results,
  people_page_07.results,
  people_page_08.results,
);

router.get('/', (req, res) => {
  let page = req.query.page;
  switch (page) {
    case '5':
      return res.json(people_page_05);
    case '4':
      return res.json(people_page_04);
    case '3':
      return res.json(people_page_03);
    case '2':
      return res.json(people_page_02);
    case '1':
    default: {
      return res.json(people_page_01);
    }
  }
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const response = results.find((person) => person.url.replace(/[^0-9]/g, '') === id);
  res.json(response);
});
module.exports = router;
