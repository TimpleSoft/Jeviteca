angular
    .module("jeviteca")
    .directive("genreDir", ["Settings", function (Settings) {

        return {
            restrict: "AE",
            templateUrl: "views/genre.html",
            replace: true,
            scope: {
                genre: "="
            },
            link: function(scope){

                scope.storageKey = Settings.genreStorageKey;

            }
        }

    }]);