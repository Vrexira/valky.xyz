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
            
            var modelOutfits = [
                'aot', 'armor', 'bandage', 
                'college', 'goddess', 'hunter', 
                'kitty', 'lingerie', 'mecha', 
                'metal', 'party', 'photon', 
                'police', 'pubg', 'santa', 
                'sheriff', 'summer', 'winter'
            ]; 

            var rParameterName = modelOutfits[(Math.random() * modelOutfits.length) | 0]
            
            return rParameterName;
            
        }

    }

};



var model = getUrlParameter('model');

setTimeout(function(){ $("#ai_char").attr("src", "/obj/" + model + ".glb"); }, 100);
