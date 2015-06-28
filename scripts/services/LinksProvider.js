angular
    .module("jeviteca")
    .service("LinksProvider", function () {

        this.getWikipediaLink = function(bandName){
            var query = encodeURIComponent(bandName);
            return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
        };

        this.getYouTubeLink = function getYouTubeLink(bandName, trackName) {
            var query = encodeURIComponent((bandName + " " + trackName).toLowerCase());
            return "https://www.youtube.com/results?search_query=" + query;
        };

    });