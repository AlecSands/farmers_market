/**
 * Express router providing market related routes
 * @module routes/market
 * @requires express
 */

// express module
var express = require('express');

// Express router to mount market related functions on.
var router = express.Router();

// For base mode, use this array
// For hard mode, move this to the database
var marketItems = [
  {id: 1, name: 'Apple', cost: 0.99},
  {id: 2, name: 'Tomatoe', cost: 1.19},
  {id: 3, name: 'Coffee', cost: 2.99},
  {id: 4, name: 'Flowers', cost: 8.99},
  {id: 5, name: 'Orange', cost: 0.89},
  {id: 6, name: 'Pepper', cost: 1.29},
  {id: 7, name: 'Lettuce', cost: 2.99}
];

/**
 * Route serving market items
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.get('/items', function(req, res){
  console.log('marketRouter - get /items');
  res.send(marketItems);
});

router.put('/buy/:id', function(req, res){
  console.log('marketRouter - put /buy');
  // TODO: Save to the database
  res.sendStatus(200); // <- Temporary
});

router.put('/sell/:id', function(req, res){
  console.log('marketRouter - put /sell');
  // TODO: Save to the database
  res.sendStatus(200); // <- Temporary
});

router.get('/leaderboard', function(req, res){
  console.log('marketRouter - get /leaderboard');
  // TODO: Retrieve from the database
  res.send([]); // <- Temporary
});

module.exports = router;
