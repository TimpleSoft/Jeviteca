angular
    .module("jeviteca")
    .service("BandsProvider", ["$http", "$filter", "$q", function ($http, $filter, $q) {

        this.getBands = function(){

            return $http.get("data/bands.json");

        }

        this.getBandById = function (bandName) {

            var deferred = $q.defer();
            $http.get("data/bands.json").then(function(data){
                var element = $filter("filter")(data.data, {"name": bandName})[0];
                deferred.resolve(element);
            });

            return deferred.promise;

        }


    }]);