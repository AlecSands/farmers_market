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

  setInterval(function(){
    console.log('im an interval');
    vm.getMarketItems();
  }, 8000);

vm.getMarketItems();
}]);
