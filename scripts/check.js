
// enable button if box checked
// $(document).ready(function(){
//     $('#previewCheck').click(function(){
    
//         if ($('#previewButton').prop("disabled") == false){

//             $('#previewButton').prop("disabled",true);

//         } else {
        
//             $('#previewButton').prop("disabled",false);
        
//         }
    
//     });
// });




// form-check-input
// alert("Please read and accept all checkboxes.");


// enable button if all boxes are checked
$(".form-check-input").change(function(){
    if ($('.form-check-input:checked').length == $('.form-check-input').length) {

        $('#previewButton').prop("disabled",false);

    } else {
        
        $('#previewButton').prop("disabled",true);
    
    }
});



// preview clothes
$("input[name='clothes']").change(function(){
    
    var cloth = $('input[type=radio][name=clothes]:checked').prop('id');
    var model = cloth.replace("_player", "");

    $("#valky-clothes").attr("src", "https://valky.xyz/img/model/race/" + model + ".png");

});



// start dev world
$("input[name='submit']").on("click", function(){
    
    var cloth = $('input[type=radio][name=clothes]:checked').prop('id');
    var model = cloth.replace("_player", "");

    window.open("/devportal/world?model=" + model, "_self");

});