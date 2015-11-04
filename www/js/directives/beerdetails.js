angular.module('beerapp.directives.beerdetails', ['beerapp.filters.abv', 'beerapp.filters.country'])
.directive('beerDetails', function () {
  return {
    restrict: "AE",
    scope: {
      ngModel: '=',
    },
    templateUrl: 'static/partials/beerdetails.html'
  };
})
