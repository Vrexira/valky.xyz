
// ----------------- //
// Keyboard Controls //
// ----------------- //

// shift - move faster
// -------------------
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $("#valky_player_char").attr("wasd-controls", "acceleration: 5000");
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $("#valky_player_char").attr("wasd-controls", "acceleration: 1000");
    }
});


// w keyCode == 87
// a keyCode == 65
// s keyCode == 83
// d keyCode == 68



// 1 keyCode == 49
$(document).keydown(function (e) {
    if (e.keyCode == 49) {
        $("#human_hunter_char").attr("animation-mixer", "clip: angry; loop:once;");
    }
});

// 2 keyCode == 50
$(document).keydown(function (e) {
    if (e.keyCode == 50) {
        $("#human_hunter_char").attr("animation-mixer", "clip: applaud; loop:once;");
    }
});

// 3 keyCode == 51
$(document).keydown(function (e) {
    if (e.keyCode == 51) {
        $("#human_hunter_char").attr("animation-mixer", "clip: attack; loop:once;");
    }
});

// 4 keyCode == 52
$(document).keydown(function (e) {
    if (e.keyCode == 52) {
        $("#human_hunter_char").attr("animation-mixer", "clip: beg; loop:once;");
    }
});


// 5 keyCode == 53
// 6 keyCode == 54
// 7 keyCode == 55
// 8 keyCode == 56
// 9 keyCode == 57
// 0 keyCode == 48 


// l-ctrl keyCode == 17
// l-alt  keyCode == 18




// ------------------ //
// Fix Camera to Char //
// ------------------ //

AFRAME.registerComponent('rotation-reader', {
    tick: function () {

        // get `position` from object (#valky_player_char)
        var position = this.el.object3D.position;
        $.each(position, function(index, value) {

            if (index == "x") {
                return positionX = (value);
            }

            if (index == "y") {
                return positionY = (27.1 + value);
            }

            if (index == "z") {
                return positionZ = (value);
            }

        });

        // set `position` to camera (#valky_player_view)
        $("#valky_player_view").attr("orbit-controls", "target: " + positionX + " " + positionY + " " + positionZ + ";");

    }
});
        