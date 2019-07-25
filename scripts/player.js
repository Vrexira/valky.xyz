
// fade in/out player icon
$('.valk-wrapper').click(function () {
    

    if ($(this).children(".valk-player").get(0).paused) {

        // fade out icon and start video
        $(this).children(".valk-player").get(0).play();
        $(this).children(".valk-player-logo").fadeOut();
        $(this).children(".valk-player-mark").fadeIn();

        // fade in icon when video ended
        $(this).children(".valk-player").get(0).addEventListener('ended',function(){
            $('.valk-wrapper').children(".valk-player-logo").fadeIn();
            $('.valk-wrapper').children(".valk-player-mark").fadeOut();
        });

    } 
    
    else {
      
        // fade in icon when video paused
        $(this).children(".valk-player").get(0).pause();
        $(this).children(".valk-player-logo").fadeIn();
        $(this).children(".valk-player-mark").fadeOut();

    }


});


$('.valk-wrapper').children(".valk-player-logo").fadeIn();
$('.valk-wrapper').children(".valk-player-mark").fadeOut();