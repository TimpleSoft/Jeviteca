angular
    .module("jeviteca")
    .directive("favorites", function(){

        return {

            restrict: "AE",
            replace: true,
            templateUrl: "views/favorites.html",
            scope: {
                elementId: "="
            },

            link: function(scope){

                scope.supportsLocalStorage = function(){
                    return (typeof (Storage) !== "undefined");
                }

                scope.isFavorite = function(){
                    var favorite = localStorage.getItem("item_"+ scope.elementId);
                    return favorite === "true";
                };

                scope.setFavorite = function(){
                    localStorage.setItem("item_" + scope.elementId, "true");
                };

                scope.unsetFavorite = function(){
                    localStorage.removeItem("item_" + scope.elementId);
                }

            }

        };

    });