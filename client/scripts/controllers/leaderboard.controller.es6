myApp.controller('LeaderController', ['UserService','$http', function(UserService, $http) {
  console.log('LeaderController created');
  var vm = this;
  vm.userService = UserService;

  vm.message='hello world!';

  console.log('user service here', UserService.userObject.userName);

  setInterval(getUsers(), 1000);

  function getUsers(){
    $http.get('/market/leaderboard').then(function(response) {

       vm.arrayofUsers = response.data;
       console.log(vm.arrayofUsers);

    });
  }
}]);
