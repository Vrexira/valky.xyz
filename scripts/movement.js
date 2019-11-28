
// shift - move faster
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $("#valky_player_char").attr("wasd-controls", "acceleration: 5000");
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $("#valky_player_char").attr("wasd-controls", "acceleration: 600");
    }
});
