
// ---------------------------- \\
// Keyboard Controls - KEY DOWN \\
// ---------------------------- \\

var keyMap = {};
onkeydown = onkeyup = function(e){

    e = e || event; // to deal with old IE
    keyMap[e.keyCode] = e.type == 'keydown';



    // -------- \\
    // Movement \\
    // -------- \\
    
    // Shift + W
    if (keyMap[87] && keyMap[16]){ 
        $("#valky_player_char").attr("wasd-controls", "acceleration: 5000");
        $("#valky_player_char").attr("animation-mixer", "clip: run; loop:infite; timeScale: 1;");
    }
    
    // W
    else if (keyMap[87]){ 
        $("#valky_player_char").attr("animation-mixer", "clip: walk; loop:infite; timeScale: 0.99;");
        $("#valky_player_view").attr("orbit-controls", "maxDistance: 100;");
    } 
    
    // S
    else if (keyMap[83]){ 
        $("#valky_player_char").attr("animation-mixer", "clip: walk; loop:infite; timeScale: -0.8;");
        $("#valky_player_view").attr("orbit-controls", "maxDistance: 100;");
        $("#valky_player_char").attr("wasd-controls", "acceleration: 1500");
    } 



    // ---------- \\
    // Animations \\
    // ---------- \\
    
    // 1
    else if (keyMap[49]){ 
        $("#human_hunter_char").attr("animation-mixer", "clip: angry; loop:once; timeScale: 0.5;");
    } 
    
    // 2
    else if (keyMap[50]){ 
        $("#human_hunter_char").attr("animation-mixer", "clip: applaud; loop:once; timeScale: 0.5;");
    } 
    
    // 3
    else if (keyMap[51]){ 
        $("#human_hunter_char").attr("animation-mixer", "clip: attack; loop:once; timeScale: 0.5;");
    } 
    
    // 4
    else if (keyMap[52]){ 
        $("#human_hunter_char").attr("animation-mixer", "clip: beg; loop:once; timeScale: 0.5;");
    } 



    // ------ \\
    // Camera \\
    // ------ \\
    
    // Ctrl
    else if (keyMap[17]){ 
        $("#valky_player_view").attr("orbit-controls", "maxDistance: 100;");
        $("#valky_player_char").attr("look-controls", "enabled: false;");
    } 
    

}











// -------------------------- \\
// Keyboard Controls - KEY UP \\
// -------------------------- \\



// -------- \\
// Movement \\
// -------- \\

// Shift
$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $("#valky_player_char").attr("wasd-controls", "acceleration: 1900");
    }
});

// W
$(document).keyup(function (e) {
    if (e.keyCode == 87) {
        $("#valky_player_char").attr("animation-mixer", "clip: idle; loop:infite; timeScale: 0.5;");
    }
});

// S
$(document).keyup(function (e) {
    if (e.keyCode == 83) {
        $("#valky_player_char").attr("animation-mixer", "clip: idle; loop:infite; timeScale: 0.5;");
        $("#valky_player_char").attr("wasd-controls", "acceleration: 1900");
    }
});



// ------ \\
// Camera \\
// ------ \\

// Ctrl
$(document).keyup(function (e) {
    if (e.keyCode == 17) {
        $("#valky_player_char").attr("look-controls", "enabled: true;");
    }
});














// -------------------------------------------- \\
//               Key Event Table                \\
// -------------------------------------------- \\
//                                              \\
//                                              \\
//      w                   keyCode == 87       \\
//      a                   keyCode == 65       \\
//      s                   keyCode == 83       \\
//      d                   keyCode == 68       \\
//                                              \\
//                                              \\
// -------------------------------------------- \\
//                                              \\
//                                              \\
//      l-shift             keyCode == 16       \\
//      l-ctrl              keyCode == 17       \\
//      l-alt               keyCode == 18       \\
//                                              \\
//                                              \\
// -------------------------------------------- \\
//                                              \\
//                                              \\
//      0                   keyCode == 48       \\
//      1                   keyCode == 49       \\
//      2                   keyCode == 50       \\
//      3                   keyCode == 51       \\
//      4                   keyCode == 52       \\
//      5                   keyCode == 53       \\
//      6                   keyCode == 54       \\
//      7                   keyCode == 55       \\
//      8                   keyCode == 56       \\
//      9                   keyCode == 57       \\
//                                              \\
//                                              \\
// -------------------------------------------- \\
        