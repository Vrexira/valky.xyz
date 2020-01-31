
// -------------- \\
// Camera Control \\
// -------------- \\

AFRAME.registerComponent('rotation-reader', {
    tick: function () {

        // get `position` from object (#valky_player_char)
        var position = this.el.object3D.position;
        $.each(position, function(index, value) {

            if (index == "x") {
                return positionX = (value);
            }

            if (index == "y") {
                return positionY = (37.1 + value);
            }

            if (index == "z") {
                return positionZ = (value);
            }

        });

        // set `position` to camera (#valky_player_view)
        $("#valky_player_view").attr("orbit-controls", "target: " + positionX + " " + positionY + " " + positionZ + ";");

    }
});