


function answers(msgNeutral) {

    if (msgNeutral.toLowerCase().includes("hello")) {
        var textAI = "Hello!";
    } 
    
    else {
        var textAI = "Lorem Ipsum";
    }

    var showareaAI = document.getElementById("messageBox");

    var elementBoxAI = "<div class='message-box-ai'>"
    var elementStartAI = "<div class='chat-answer-ai'>";
    var elementEndAI = "</div></div>";

    showareaAI.innerHTML = showareaAI.innerHTML + (elementBoxAI + elementStartAI + textAI + elementEndAI);

}





function showtext() {

    var messageInput = document.getElementById("chatTextarea");
    var neutralized = (messageInput.value).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    var showarea = document.getElementById("messageBox");

    var elementBox = "<div class='message-box-user'>"
    var elementStart = "<div class='chat-answer-user'>";
    var elementEnd = "</div></div>";

    if (messageInput.value != "") {
        showarea.innerHTML = showarea.innerHTML + (elementBox + elementStart + neutralized + elementEnd);
        answers(neutralized);
    }

    messageInput.value = "";

}


$(document).ready(function(){
    $('#chatTextarea').keypress(function(e){
        if(e.keyCode==13){
            e.preventDefault();
            $('#chat-button').click();
        }
    });
});


