const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/trendingList', (req, res) => {
  const response = {};
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/data.json')),
    );
    const list = data.filter((ele) => ele.status !== 'coming soon');
    response.data = list;
    response.status = 0;
    return res.json(response);
  } catch (error) {
    console.error(error);
    response.data = [];
    response.status = 1;
    return res.json(response);
  }
});

router.get('/comingSoonList', (req, res) => {
  const response = {};
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/data.json')),
    );
    const list = data.filter((ele) => ele.status === 'coming soon');
    response.data = list;
    response.status = 0;
    return res.json(response);
  } catch (error) {
    response.data = [];
    response.status = 1;
    return res.json(response);
  }
});

router.get('/featuredList', (req, res) => {
  const response = {};
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/data.json')),
    );
    response.data = data;
    response.status = 0;
    return res.json(response);
  } catch (error) {
    response.data = [];
    response.status = 1;
    return res.json(response);
  }
});

module.exports = router;
