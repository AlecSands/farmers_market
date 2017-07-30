myApp.controller('LeaderController', ['UserService', function(UserService) {
  console.log('LeaderController created');
  var vm = this;
  vm.userService = UserService;
}]);
