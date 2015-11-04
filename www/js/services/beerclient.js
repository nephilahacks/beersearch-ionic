angular.module('beerapp.services.beerclient', [])
.service('BeerClient', function($http) {

    var urlBase = 'http://prost.herokuapp.com/api/v1/beer/';

    this.getBeer = function (beerName) {
        return $http.get(urlBase + beerName);
    };

});