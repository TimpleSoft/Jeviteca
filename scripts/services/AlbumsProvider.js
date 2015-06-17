angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", function ($http) {

        this.getAlbums = function(){
            return $http.get("data/albums.json");
        };

    }]);