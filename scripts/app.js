angular.module("jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider){

        // Tablas
        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bands", "bands");
        $routeSegmentProvider.when("/genres", "genres");

        // Vistas en detalle
        $routeSegmentProvider.when("/albums/:id/detail", "album_detail");
        $routeSegmentProvider.when("/bands/:id/detail", "band_detail");



        // Segmentos
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


        $routeSegmentProvider.segment("album_detail", {

            controller: "AlbumDetailCtrl",
            templateUrl: "views/AlbumDetail.html",
            resolve: {
                Album: ["AlbumsProvider", "$routeParams", function (AlbumsProvider, $routeParams) {

                    return AlbumsProvider.getAlbumById($routeParams.id);

                }]
            }

        });



        $routeSegmentProvider.segment("band_detail", {

            controller: "BandDetailCtrl",
            templateUrl: "views/BandDetail.html",
            resolve: {
                Band: ["BandsProvider", "$routeParams", function (BandsProvider, $routeParams) {

                    return BandsProvider.getBandById($routeParams.id);

                }]
            }

        });


        // Si no encuentra la ruta lleva a la pantalla principal de álbumes
        // podríamos definir tmb una página con error 404 por ejemplo
        $routeProvider.otherwise({
            redirectTo: "/albums"
        });


    }]);