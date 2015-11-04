
var app = angular.module('starter', [
    'ionic',
    'beerapp.services.beerclient',
    'beerapp.directives.beerdetails'
]);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }
]);

app.controller('beerCtrl', function($scope, BeerClient) {

    $scope.fetchedBeer = undefined;

    $scope.searchBeer = function() {
        //console.log($scope.beerquery);
        BeerClient.getBeer($scope.beerquery)
        .then(function successCallback(response) {
            $scope.fetchedBeer = response.data;
          }, function errorCallback(response) {
            $scope.fetchedBeer = undefined;
          }
        );
    }

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
