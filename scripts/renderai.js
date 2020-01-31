// get url params
var getUrlParameter = function getUrlParameter(sParam) {

    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');


        // outfit given by url
        if (sParameterName[0] === sParam) {
            
            return sParameterName[1];
        }


        // outfit given random
        if (sParameterName[1] === undefined) {
            
            // normal outifts array
            // chance: 5.263157894736842
            var modelOutfits = [
                'aot', 'armor', 'bandage', 
                'college', 'mecha', 'hunter', 
                'metal', 'party', 'photon', 
                'police', 'pubg', 'santa', 
                'sheriff', 'summer', 'winter'
            ]; 
            
            // special outift array
            // chance: 1.754385964912281
            var modelOutfitsSpecial = [
                'goddess', 'kitty', 'lingerie'
            ];


            // add special outfit to normal
            var rParameterSpecial = modelOutfitsSpecial[(Math.random() * modelOutfitsSpecial.length) | 0];
            modelOutfits.push(rParameterSpecial);

            // choose displayed outfit
            var rParameterName = modelOutfits[(Math.random() * modelOutfits.length) | 0];
            
            
            return rParameterName;

        }

    }

};



var model = getUrlParameter('model');

setTimeout(function(){ $("#ai_char").attr("src", "/obj/" + model + ".glb"); }, 100);
