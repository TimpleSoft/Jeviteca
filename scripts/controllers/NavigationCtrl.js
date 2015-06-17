angular
    .module("jeviteca")
    .controller("NavigationCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment){

        $scope.routeAlbums = function(){
            // lo ponemos en singular por si despues incluimos album_detail
            return $routeSegment.startsWith("album");
        };

        $scope.routeBands = function(){
            // lo ponemos en singular por si despues incluimos band_detail
            return $routeSegment.startsWith("band");
        };

        $scope.routeGenres = function(){
            // lo ponemos en singular por si despues incluimos genre_detail
            return $routeSegment.startsWith("genre");
        };

    }]);