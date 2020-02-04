


// ------------------- //
// Send Msg - Entr Key //
// ------------------- //
$(document).ready(function(){
    $('#chatTextarea').keypress(function(e){
        if(e.keyCode==13){
            e.preventDefault();
            $('#chat-button').click();
        }
    });
});


