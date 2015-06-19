angular
    .module("jeviteca")
    .controller("BandDetailCtrl", ["$scope", "Band", function ($scope, Band) {

        $scope.band = Band;

    }]);