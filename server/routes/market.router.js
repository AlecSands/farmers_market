/**
 * Express router providing market related routes
 * @module routes/market
 * @requires express
 */

// express module
var express = require('express');
<<<<<<< HEAD

// Express router to mount market related functions on.
var router = express.Router();
var Users = require('../models/user.js');
=======
var user =
  // Express router to mount market related functions on.
  var router = express.Router();

>>>>>>> feature-marketPLace-ale
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

<<<<<<< HEAD
function changeItemCost() {

};

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

  Users.find({}, function(err, result) { //find * (same as in mongoose)
  if(err) {
    console.log('find error: ', err);
    res.sendStatus(500);
  } else {
    //res.send(data); //array of objects - each obj a document in the collectin in the db
    //res.send(result.rows) - same as

    var arrayOfResults = [];
    for(i=0;i<result.length;i++){
      var eachUserStuff = {};
       eachUserStuff.username = result[i].username;
       eachUserStuff.moneys = result[i].money;
      //var x = result[i].username;
      //console.log(x);
      arrayOfResults.push(eachUserStuff);
    }
    console.log('got all users ', arrayOfResults);
    res.send(arrayOfResults);
  }//end if
}).sort({money:-1});//end find

  //res.send([]); // <- Temporary
});

module.exports = router;


function chooseRandomPrice() {
  console.log('chooseRandomPrice');
  console.log((Math.random() * (0.01 - 0.15) + 0.15).toFixed(2));
  return (Math.random() * (0.01 - 0.15) + 0.15).toFixed(2);
}

var productPrice;
function changePriceOnTimer() {
  productPrice = setInterval(chooseRandomPrice, 10000);
}

console.log(changePriceOnTimer());
=======
buyItem = function(id) {
    id = req.params.id;
    data = req.body;
    var basket = [];
    console.log('in update:', id);
    var price = marketItems[id - 1].cost;
    if (req.user.money >= price) {
      user.findByIdAndUpdate({
          _id: id
        }, {
          $set: {
            basket: data.basket,
            money: data.money
          }
        },
      }
      else {
        res.send('buy stuff');
      }
    }





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
>>>>>>> feature-marketPLace-ale
