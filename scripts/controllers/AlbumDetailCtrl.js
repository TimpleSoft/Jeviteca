angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "Album", "Settings", "LinksProvider", function ($scope, Album, Settings, LinksProvider) {

        $scope.album = Album;
        $scope.imgPath = Settings.imgPath;
        $scope.youtubeLink = LinksProvider.getYouTubeLink(Album.band.name, "");


    }]);