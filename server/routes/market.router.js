/**
 * Express router providing market related routes
 * @module routes/market
 * @requires express
 */

// express module
var express = require('express');

// Express router to mount market related functions on.
var router = express.Router();
var Users = require('../models/user.js');

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

/////// CHASE AND ALEC STUFF HERE

sellItem = function(req, id, res) {
    user = req.user;
    console.log(req.user);
    console.log('in sellItem:', id);

    var price = marketItems[id - 1].cost;
    if (user.basket[id-1] > 0) {
      var userBasket = user.basket;
      userBasket[id-1] -= 1;
      var userMoney = user.money + marketItems[id - 1].cost;

      Users.findByIdAndUpdate(
        {_id: req.user.id},
        { $set: {
            basket: userBasket,
            money: userMoney,
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
        else {
          console.log('NO ITEMS TO SELL');
        }
        };


/////// TED AND ALE STUFF BELOW HERE

buyItem = function(req, id, res) {
    user = req.user;
    console.log(req.user);
    var basket = [];
    console.log('in update:', id);
    var price = marketItems[id - 1].cost;
    if (req.user.money >= price) {
      Users.findByIdAndUpdate(
        {_id: req.user.id},
        { $set: {
            basket: Users.basket[id] + 1,
            money: Users.money - price
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
         } else {
           alert('not enough money');
         }
};
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
  var itemId = req.params.id;
  buyItem(req, itemId, res);
  // // TODO: Save to the database
  // res.sendStatus(200); // <- Temporary
});



/////// CHASE AND ALEC BELOW HERE

router.put('/sell/:id', function(req, res){
  console.log('marketRouter - put /sell');
  // TODO: Save to the database
  var itemId = req.params.id;
  sellItem(req, itemId, res);

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
