myApp.controller('MarketController', ['UserService' ,function(UserService) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.marketItems = [];

// vm.userService.getuser();
  vm.getMarketItems();

  vm.getMarketItems = function(){
    console.log('in getMarketItems');
    $http.get('/items').then(function(response){
      console.log('got GET response', response);
      vm.marketItems = response.data;
      console.log('vm.marketItems:', vm.marketItems);
    });
  };

  setInterval(function(){
    console.log('im an interval');
    vm.getMarketItems();
  }, 8000);


}]);
