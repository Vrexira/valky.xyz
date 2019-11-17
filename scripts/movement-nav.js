
// shift - move faster
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $("#rig").attr("movement-controls", "constrainToNavMesh: true; speed: 0.4;");
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $("#rig").attr("movement-controls", "constrainToNavMesh: true; speed: 0.2;");
    }
});
