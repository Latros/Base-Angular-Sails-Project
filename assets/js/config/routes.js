app.config(function($routeProvider, $locationProvider) {

  $routeProvider.when("/app/landing", {
    templateUrl: '/templates/landing.html',
    controller: 'landingController'
  });

  $locationProvider.html5Mode(true);

// $routeProvider.when('/', {
//   templateUrl:'/templates/dashboard.html',
//   controller: 'dashboardController',
//   resolve: {
//     "User": function($http){
//       return $http.get("/User/projects");
//     },
//     "Account": function($http){
//       return $http.get("/Account/Details");
//     }
//   }
// });
// $routeProvider.when("/app/client/:client/projects", {
//   templateUrl: '/templates/client_projects.html',
//   controller: 'clientProjectsController',
//   resolve: {
//     "projects" : function($http, $route){
//       console.log($route.current.params);
//       return $http.get("/Client/projects/" + $route.current.params.client);
//     }
//   }
// });
});
