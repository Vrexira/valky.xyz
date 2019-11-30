
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


// w a s d
// -------
// $(document).keydown(function (e) {
//     if (e.keyCode == 87 || e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68) {
//
//     }
// });


// l-ctrl
// ------
// $(document).keydown(function (e) {
//     if (e.keyCode == 17) {
//
//     }
// });

// $(document).keyup(function (e) {
//     if (e.keyCode == 17) {
//
//     }
// });




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
        