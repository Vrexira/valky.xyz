
// preview clothes
$("input[name='clothes']").change(function(){
    
    var cloth = $('input[type=radio][name=clothes]:checked').prop('id');
    var model = cloth.replace("cloth_", "");

    $("#valky-clothes").attr("src", "/m/img/model/closet/" + model + ".png");

});


// start web render
$("input[name='submit']").on("click", function(){
    
    var cloth = $('input[type=radio][name=clothes]:checked').prop('id');
    var model = cloth.replace("cloth_", "");

    window.open("/v/valkyria/webgl?model=" + model, "_self");

});