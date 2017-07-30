myApp.controller('MarketController', ['UserService' ,function(UserService) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
}]);
