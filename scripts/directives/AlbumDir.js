angular
    .module("jeviteca")
    .directive("albumDir", ["Settings", function(Settings){
        return {
            restrict: "AE",
            templateUrl: "views/album.html",
            replace: true,
            scope: {
                album: "="
            },
            link: function(scope){

                scope.imgPath = Settings.imgPath;
                scope.storageKey = Settings.albumStorageKey;

            }
        }
    }]);