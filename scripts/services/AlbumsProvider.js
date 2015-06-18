angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", function ($http) {

        this.getAlbums = function(){
            return $http.get("data/albums.json");
        };

        this.getAlbumById = function(albumId){
            albumsCollection = this.getAlbums();
            return $filter("filter")(albumsCollection, {"id": albumId})[0];
        }

    }]);