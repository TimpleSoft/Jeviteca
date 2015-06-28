angular
    .module("jeviteca")
    .controller("BandDetailCtrl", ["$scope", "Band", "LinksProvider", function ($scope, Band, LinksProvider) {

        $scope.band = Band;
        $scope.wikipediaLink = LinksProvider.getWikipediaLink(Band.name);

    }]);