angular
    .module("jeviteca")
    .directive("albumDir", function(){
        return {
            restrict: "AE",
            templateUrl: "views/album.html",
            replace: true,
            scope: {
                album: "="
            }
        }
    });