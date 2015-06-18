angular
    .module("jeviteca")
    .directive("favorites", ["Settings", function(Settings){

        return {

            restrict: "AE",
            replace: true,
            templateUrl: "views/favorites.html",
            scope: {
                elementId: "=",
                storageKey: "="
            },

            link: function(scope){

                scope.supportsLocalStorage = function(){
                    return (typeof (Storage) !== "undefined");
                };

                scope.isFavorite = function(){
                    var favs = JSON.parse(localStorage.getItem(scope.storageKey));
                    if (favs != null) {
                        return (favs.indexOf(scope.elementId) >= 0);
                    }
                    return false;
                };

                scope.setFavorite = function(){
                    var favs = JSON.parse(localStorage.getItem(scope.storageKey));
                    if (favs != null) {
                        // Checkeamos que el elemento no está en el array
                        if (favs.indexOf(scope.elementId) < 0) {
                            favs.push(scope.elementId);
                        }
                    }else{
                        favs = [scope.elementId];
                    }
                    localStorage.setItem(scope.storageKey, JSON.stringify(favs));
                };

                scope.unsetFavorite = function(){
                    var favs = JSON.parse(localStorage.getItem(scope.storageKey));
                    var index = favs.indexOf(scope.elementId);
                    if (index > -1) {
                        favs.splice(index, 1);
                    }
                    localStorage.setItem(scope.storageKey, JSON.stringify(favs));
                };

            }

        };

    }]);