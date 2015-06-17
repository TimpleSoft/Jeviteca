angular
    .module("jeviteca")
    .filter("member", function(){

        return function(member){
            return " |* " + member + " *| ";
        }

    });