angular
    .module("jeviteca")
    .directive("bandDir", ["Settings", function (Settings) {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/band.html",
            scope: {
                band: "="
            },
            link: function(scope){
                scope.storageKey = Settings.bandStorageKey;
            }
        }

    }]);