angular.module( 'quiz.home', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.tpl.html',
    data: { 
      pageTitle: 'Start the quiz',
      requiresLogin: true
    }
  });
})
.controller( 'HomeCtrl', function HomeController( $scope ) {
  
});
