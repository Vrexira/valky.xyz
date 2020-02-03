// get url params
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }

        if (sParameterName[1] === undefined) {
            window.open("/v/404","_self");
        }

    }

};



var model = getUrlParameter('model');

setTimeout(function(){ $("#valky_player").attr("src", "/m/obj/player/" + model + "_player.glb"); }, 200);
