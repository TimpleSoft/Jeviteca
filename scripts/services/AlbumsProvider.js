angular
    .module("jeviteca")
    .service("AlbumsProvider", ["$http", "$filter", "$q", function ($http, $filter, $q) {

        this.getAlbums = function(){
            return $http.get("data/albums.json");
        };

        this.getAlbumById = function(albumId){

            var deferred = $q.defer();
            $http.get("data/albums.json").then(function(data){
                var element = $filter("filter")(data.data, {"id": albumId})[0];
                deferred.resolve(element);
            });

            return deferred.promise;

        }

    }]);