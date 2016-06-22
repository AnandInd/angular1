(function(){
        
    var module = angular.module("MyApp");
    
    var RepoController = function($scope, $log,$routeParams, github){
      
      var username = $routeParams.username;
      var reponame = $routeParams.reponame;
     
      $log.info("user name "+username);
      
      var onRepo = function(data){
          $scope.repo = data;
      };  
      var onError = function(reason){
          
        $scope.error = reason;  
      };
      github.getRepoDetails(username, reponame).then(onRepo, onError);
        
    };
    
    module.controller("RepoController", RepoController);
}());