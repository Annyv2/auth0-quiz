angular.module('quiz.info', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('info', {
      url: '/info',
      controller: 'InfoCtrl',
      templateUrl: 'info/info.tpl.html',
      data: {
        pageTitle: 'Learn more about Auth0',
        bodyClass: 'info-body',
        requiresLogin: true
      }
    });
  }
]).controller('InfoCtrl', [
  '$scope',
  function HomeController($scope) {
    $scope.start = function () {
      $state.go('home');
    };
  }
]);