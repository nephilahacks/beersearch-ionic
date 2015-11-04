angular.module('beerapp.filters.abv', [])
.filter('abv', function(){
  return function(val) {
    if (!isNaN(val)) {
        val = val + '%';
    }
    return val;
  };
});