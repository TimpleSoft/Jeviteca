angular
    .module("jeviteca")
    .directive("bandDir", function () {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/band.html",
            scope: {
                band: "="
            }
        }

    });