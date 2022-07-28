const express = require('express');
const Router = require('Router');
const PageController = require('../controllers/pageController');
const SearchController = require('../controllers/searchController'); 

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

router.get('/search', SearchController.search)

module.exports = Router()
module.exports = router;