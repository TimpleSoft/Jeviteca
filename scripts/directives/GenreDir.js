angular
    .module("jeviteca")
    .directive("genreDir", function () {

        return {
            restrict: "AE",
            templateUrl: "views/genre.html",
            replace: true,
            scope: {
                genre: "="
            }
        }

    });