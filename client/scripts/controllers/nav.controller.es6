myApp.controller('NavController', ['UserService' ,function(UserService) {
  console.log('NavController created');
  var vm = this;
  vm.userService = UserService;
}]);
