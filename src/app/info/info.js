angular.module( 'quiz.info', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'info', {
    url: '/info',
    controller: 'InfoCtrl',
    templateUrl: 'info/info.tpl.html',
    data: { 
      pageTitle: 'Learn more about Auth0',
      requiresLogin: true
    }
  });
})
.controller( 'InfoCtrl', function HomeController( $scope ) {

  $scope.start = function() {
    $state.go('home');
  }
  
});
