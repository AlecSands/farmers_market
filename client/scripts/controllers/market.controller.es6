myApp.controller('MarketController', ['UserService', '$http' ,function(UserService, $http) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.marketItems = [];

  vm.userService.getuser();
console.log("USER OBJECT IS:",vm.userObject);
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

}]);
