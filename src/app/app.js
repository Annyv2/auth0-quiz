angular.module( 'quiz', [
  'templates-app',
  'templates-common',
  'quiz.home',
  'quiz.quiz',
  'quiz.login',
  'quiz.info',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Auth0 Quiz' ;
    }
    $scope.bodyClass = toState.data.bodyClass || '';
  });
})

;

