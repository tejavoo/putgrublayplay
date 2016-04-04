var app = angular.module('putApp', ['ngMaterial']);
    app.controller('putCtrl',['$scope',function($scope){
      
    }]);

    app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange', {
     'default':'800' 
   })
   .accentPalette('teal', {
     'default':'500'
   });
});