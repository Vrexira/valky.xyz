
// fade in/out player icon
$('.valk-wrapper').click(function () {
    

    if ($(this).children(".dev-player").get(0).paused) {

        // fade out icon and start video
        $(this).children(".dev-player").get(0).play();
        $(this).children(".valk-player-logo").fadeOut();
        $(this).children(".dev-player-mark").fadeIn();

        // fade in icon when video ended
        $(this).children(".dev-player").get(0).addEventListener('ended',function(){
            $('.valk-wrapper').children(".valk-player-logo").fadeIn();
            $('.valk-wrapper').children(".dev-player-mark").fadeOut();
        });

    } 
    
    else {
      
        // fade in icon when video paused
        $(this).children(".dev-player").get(0).pause();
        $(this).children(".valk-player-logo").fadeIn();
        $(this).children(".dev-player-mark").fadeOut();

    }


});


$('.valk-wrapper').children(".valk-player-logo").fadeIn();
$('.valk-wrapper').children(".dev-player-mark").fadeOut();