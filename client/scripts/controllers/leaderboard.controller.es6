myApp.controller('LeaderController', ['UserService','$http', function(UserService, $http) {
  console.log('LeaderController created');
  var vm = this;
  vm.userService = UserService;

  vm.message='hello world!';

  console.log('user service here', UserService.userObject.userName);

  getUsers();

  function getUsers(){
    $http.get('/market/leaderboard').then(function(response) {
      console.log(response);
       vm.arrayofUsers = response.data;
       vm.arrayofUsers.sort(function(a,b){return b-a;});
    });
  }
}]);
