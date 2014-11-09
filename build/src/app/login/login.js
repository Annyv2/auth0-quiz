angular.module('quiz.login', [
  'ui.router',
  'auth0',
  'angular-jwt',
  'angular-storage'
]).config([
  '$stateProvider',
  'authProvider',
  '$httpProvider',
  'jwtInterceptorProvider',
  function config($stateProvider, authProvider, $httpProvider, jwtInterceptorProvider) {
    $stateProvider.state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'login/login.tpl.html',
      data: { pageTitle: 'Login' }
    });
    authProvider.init({
      domain: 'codecademy.auth0.com',
      clientID: 'yUiinEhNCEa7jztDjn2d87KHIFUFYNHL',
      loginState: 'login'
    });
    jwtInterceptorProvider.tokenGetter = [
      'store',
      function (store) {
        return store.get('token');
      }
    ];
    $httpProvider.interceptors.push('jwtInterceptor');
  }
]).run([
  '$rootScope',
  'auth',
  'store',
  'jwtHelper',
  '$state',
  function ($rootScope, auth, store, jwtHelper, $state) {
    $rootScope.$on('$locationChangeStart', function () {
      if (!auth.isAuthenticated) {
        var token = store.get('token');
        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            auth.authenticate(store.get('profile'), token);
          } else {
            $state.go('login');
          }
        }
      }
    });
  }
]).controller('LoginCtrl', [
  '$scope',
  'auth',
  '$state',
  'store',
  function HomeController($scope, auth, $state, store) {
    $scope.login = function () {
      auth.signin({
        connections: [
          'twitter',
          'Username-Password-Authentication'
        ]
      }, function (profile, token) {
        store.set('profile', profile);
        store.set('token', token);
        $state.go('home');
      }, function (error) {
        console.log('There was an error logging in', error);
      });
    };
  }
]);