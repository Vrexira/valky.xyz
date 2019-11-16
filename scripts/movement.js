
// shift - move faster
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        console.log("Pressed");
        $("#world").attr("wasd-controls", "acceleration: 5000");
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        console.log("Not Pressed");
        $("#world").attr("wasd-controls", "acceleration: 600");
    }
});
