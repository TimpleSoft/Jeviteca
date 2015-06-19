angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "Album", "Settings", function ($scope, Album, Settings) {

        $scope.album = Album;
        $scope.imgPath = Settings.imgPath;

    }]);