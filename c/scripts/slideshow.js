
// pause slideshow on mouse hover
$(function(){

    $('#slideshow-valky.slide').carousel({
        pause: "hover"
    });

    $('input').focus(function(){
        $("#slideshow-valky").carousel('pause');
    }).blur(function() {
        $("#slideshow-valky").carousel('cycle');
    });

});

// pause slideshow on mouse hover
$(function(){

    $('#slideshow-valky-head.slide').carousel({
        pause: "hover"
    });

    $('input').focus(function(){
        $("#slideshow-valky").carousel('pause');
    }).blur(function() {
        $("#slideshow-valky").carousel('cycle');
    });

});