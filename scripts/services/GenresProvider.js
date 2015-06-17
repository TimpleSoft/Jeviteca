angular
    .module("jeviteca")
    .service("GenresProvider", ["$http", function ($http) {

        this.getGenres = function(){
            return $http.get("data/genres.json");
        };

    }]);