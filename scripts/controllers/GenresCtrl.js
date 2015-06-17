angular
    .module("jeviteca")
    .controller("GenresCtrl", ["$scope", "Genres", function ($scope, Genres) {

        $scope.genres = Genres.data;

    }]);