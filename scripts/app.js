angular.module("jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider){

        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bands", "bands");
        $routeSegmentProvider.when("/genres", "genres");

        $routeSegmentProvider.segment("albums", {

            controller: "AlbumsCtrl",
            templateUrl: "views/Albums.html",
            resolve: {
                Albums: ["AlbumsProvider", function(AlbumsProvider){

                    return AlbumsProvider.getAlbums();

                }]
            }

        });

        $routeSegmentProvider.segment("bands", {

            controller: "BandsCtrl",
            templateUrl: "views/Bands.html",
            resolve: {
                Bands: ["BandsProvider", function(BandsProvider){

                    return BandsProvider.getBands();

                }]

            }

        });

        $routeSegmentProvider.segment("genres", {

            controller: "GenresCtrl",
            templateUrl: "views/Genres.html",
            resolve: {
                Genres: ["GenresProvider", function(GenresProvider){

                    return GenresProvider.getGenres();

                }]
            }

        });


        // Si no encuentra la ruta lleva a la pantalla principal de álbumes
        // podríamos definir tmb una página con error 404 por ejemplo
        $routeProvider.otherwise({
            redirectTo: "/albums"
        });


    }]);