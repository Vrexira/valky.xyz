


// ------------------ //
// CHAT ANSWER - USER //
// ------------------ //
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











