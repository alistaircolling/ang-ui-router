// app.js
//the routerApp used for all routing of states, views and URLs

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
  // add states to the state provider
  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })

  //nested list with custom controller - I think the scope is passed and the dogs array is attached. presumably I could specify a controller with its own js file for example that requested the data from an API
  .state('home.list', {
      url: '/list',
      templateUrl: 'partial-home-list.html',
      controller: function($scope) {
        $scope.dogs = ['Fenella', 'Monty', 'Coco'];
      }
    })
    //nested paragraph with a string passed in template. again, presumably the template could specify
    .state('home.paragraph', {
      url: '/paragraph',
      template: 'This was text passed from the router config.'
    })


  // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
  .state('about', {
    // we'll get to this in a bit
  });

});
