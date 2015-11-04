angular.module('beerapp.filters.country', [])
.filter('country', function(){
  return function(val) {
    if(!val){
        return val;
    }
    return val.replace(/\[.*\]/gi, '');
  };
});