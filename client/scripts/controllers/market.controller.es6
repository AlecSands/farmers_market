myApp.controller('MarketController', ['UserService', '$http' ,function(UserService, $http) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.marketItems = [];

  vm.userService.getuser();

  vm.getMarketItems = function(){
    console.log('in getMarketItems');
    $http.get('/market/items').then(function(response){
      console.log('got GET response', response);
      vm.marketItems = response.data;
      console.log('vm.marketItems:', vm.marketItems);
    });
  };

  vm.sell = function(id){
    console.log('in vm.sell');
    $http.put('/market/sell/' + id).then(function(response){
      console.log('got response from buy sell');
      vm.userService.getuser();
    });
  };

  vm.buy = function(id){
    console.log('in vm.buy');
    $http.put('/market/buy/' + id).then(function(response){
      console.log('got response from buy PUT');
      vm.userService.getuser();
    });
  };

  setInterval(function(){
    console.log('im an interval');
    vm.getMarketItems();
  }, 8000);

  vm.getMarketItems();


  var marketThings = [
    {id: 1, name: 'Apple', cost: 0.99},
    {id: 2, name: 'Tomatoe', cost: 1.19},
    {id: 3, name: 'Coffee', cost: 2.99},
    {id: 4, name: 'Flowers', cost: 8.99},
    {id: 5, name: 'Orange', cost: 0.89},
    {id: 6, name: 'Pepper', cost: 1.29},
    {id: 7, name: 'Lettuce', cost: 2.99},
    {id: 8, name: 'Basket', cost: 5.99},
    {id: 9, name: 'Apron', cost: 19.99},
    {id: 10, name: 'Potholders', cost: 19.99}
  ];

  ///// CODE FOR SERVER ADJUST COST INTERVAL FUNCTIONS //////

  // function adjustCost(i) {
  //   //console.log('in adjustCost i is:', i);
  //   if(Math.random() > 0.5){
  //     marketThings[i].cost += parseFloat((Math.random() * 0.15));
  //   } else {
  //     marketThings[i].cost -= parseFloat((Math.random() * 0.15));
  //   }
  //     marketThings[i].cost = parseFloat(marketThings[i].cost.toFixed(2));
  // }
  //
  // function changePrices(array){
  //   for(var i = 0; i < array.length; i++) {
  //     adjustCost(i);
  //   }
  // }
  //
  // setInterval(function(){
  //   changePrices(marketThings);
  //   console.log(marketThings);
  // }, 10000);

}]);
