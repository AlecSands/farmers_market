/**
 * Express router providing market related routes
 * @module routes/market
 * @requires express
 */

// express module
var express = require('express');
var user =
  // Express router to mount market related functions on.
  var router = express.Router();

// For base mode, use this array
// As a stretch goal, move this to the database
var marketItems = [{
    id: 1,
    name: 'Apple',
    cost: 0.99
  },
  {
    id: 2,
    name: 'Tomatoe',
    cost: 1.19
  },
  {
    id: 3,
    name: 'Coffee',
    cost: 2.99
  },
  {
    id: 4,
    name: 'Flowers',
    cost: 8.99
  },
  {
    id: 5,
    name: 'Orange',
    cost: 0.89
  },
  {
    id: 6,
    name: 'Pepper',
    cost: 1.29
  },
  {
    id: 7,
    name: 'Lettuce',
    cost: 2.99
  },
  {
    id: 8,
    name: 'Basket',
    cost: 5.99
  },
  {
    id: 9,
    name: 'Apron',
    cost: 19.99
  },
  {
    id: 10,
    name: 'Potholders',
    cost: 19.99
  }
];

/**
 * Route serving market items
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

buyItem = function(id) {
    itemId = req.params.id;
    user = req.user;
    console.log(req.user);
    var basket = [];
    console.log('in update:', id);
    var price = marketItems[id - 1].cost;
    if (req.user.money >= price) {
      User.findByIdAndUpdate(
        {_id: req.user.id},
        { $set: {
            basket: user.basket,
            money: user.money
          }},
          function(err, data) {
               if(err) {
                 console.log('remove error: ', err);
                 res.sendStatus(500);
               } else {
                 res.sendStatus(200);
               }
             }
           );
          }
        };




    router.get('/items', function(req, res) {
      console.log('marketRouter - get /items');
      res.send(marketItems);
    });

    router.put('/buy/:id', function(req, res) {
      console.log('marketRouter - put /buy');
      // TODO: Save to the database
      res.sendStatus(200); // <- Temporary
    });

    router.put('/sell/:id', function(req, res) {
      console.log('marketRouter - put /sell');
      // TODO: Save to the database
      res.sendStatus(200); // <- Temporary
    });

    router.get('/leaderboard', function(req, res) {
      console.log('marketRouter - get /leaderboard');
      // TODO: Retrieve from the database
      res.send([]); // <- Temporary
    });

    module.exports = router;
