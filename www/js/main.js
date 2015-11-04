var app = angular.module('beerapp', [
    'beerapp.services.beerclient',
    'beerapp.directives.beerdetails'
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