
// fade in/out player icon
$('.valk-wrapper').click(function () {
    

    if ($(this).children(".main-player").get(0).paused) {

        // fade out icon and start video
        $(this).children(".main-player").get(0).play();
        $(this).children(".valk-player-logo").fadeOut();
        $(this).children(".main-player-mark").fadeIn();

        // fade in icon when video ended
        $(this).children(".main-player").get(0).admainentListener('ended',function(){
            $('.valk-wrapper').children(".valk-player-logo").fadeIn();
            $('.valk-wrapper').children(".main-player-mark").fadeOut();
        });

    } 
    
    else {
      
        // fade in icon when video paused
        $(this).children(".main-player").get(0).pause();
        $(this).children(".valk-player-logo").fadeIn();
        $(this).children(".main-player-mark").fadeOut();

    }


});


$('.valk-wrapper').children(".valk-player-logo").fadeIn();
$('.valk-wrapper').children(".main-player-mark").fadeOut();