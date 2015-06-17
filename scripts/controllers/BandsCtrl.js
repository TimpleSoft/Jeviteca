angular
    .module("jeviteca")
    .controller("BandsCtrl", ["$scope", "Bands", function ($scope, Bands) {

        $scope.bands = Bands.data;

    }]);