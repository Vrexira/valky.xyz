
// ----------------- //
// Keyboard Controls //
// ----------------- //

// shift - move faster
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        if (e.keyCode == 17) {
            $("#valky_player_view").attr("wasd-controls", "acceleration: 5000");
        } else {
            $("#valky_player_char").attr("wasd-controls", "acceleration: 5000");
        }
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        if (e.keyCode == 17) {
            $("#valky_player_view").attr("wasd-controls", "acceleration: 600");
        } else {
            $("#valky_player_char").attr("wasd-controls", "acceleration: 600");
        }
    }
});


// w a s d
$(document).keydown(function (e) {
    if (e.keyCode == 87 || e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68) {
        
    }
});


// l-ctrl - camera movement
// $(document).keydown(function (e) {
//     if (e.keyCode == 17) {
//         $("#valky_player_char").attr("wasd-controls", "enabled: false;");
//         $("#valky_player_char").attr("look-controls", "enabled: false;");
        
//         $("#valky_player_view").attr("wasd-controls", "enabled: true;");
//         $("#valky_player_view").attr("look-controls", "enabled: true;");
//     }
// });

// $(document).keyup(function (e) {
//     if (e.keyCode == 17) {
//         $("#valky_player_char").attr("wasd-controls", "enabled: true;");
//         $("#valky_player_char").attr("look-controls", "enabled: true; pointerLockEnabled: true;");
        
//         $("#valky_player_view").attr("wasd-controls", "enabled: false;");
//         $("#valky_player_view").attr("look-controls", "enabled: false;");
//     }
// });




// ------------------ //
// Fix Camera to View //
// ------------------ //

// press W
// $(document).keydown(function (e) {
//    if (e.keyCode == 87) {

        AFRAME.registerComponent('rotation-reader', {
            tick: function () {
        
                // `rotation` is a three.js Euler using radians. `quaternion` also available.
                var rotation = this.el.object3D.rotation;
                $.each(rotation, function(index, value) {

                    if (index == "_x") {
                        return rotationX = (value * 3.1415);
                    }

                    if (index == "_y") {
                        return rotationY = (value * 3.1415);
                    }

                    if (index == "_z") {
                        return rotationZ = (value * 3.1415);
                    }

                });
        

                // `position` is a three.js Vector3.
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

                    // position="-130 36 125"
                    // target: -130 37.1 95.0;


                });

                $("#valky_player_view").attr("orbit-controls", "target: " + positionX + " " + positionY + " " + positionZ + ";");

                
            }
        });
        
//    }
//});