


function answers(msgNeutral) {



    // --------- //
    // Greetings //
    // --------- //
    if (msgNeutral.toLowerCase().includes("hello") || msgNeutral.toLowerCase().includes("hey") || msgNeutral.toLowerCase().includes("hi")) {

        // possible answers
        var answerArray = [
            "Hello there!", 
            "Heya!",
            "Hi",
            "Hello",
            "Oh, hey!"
        ]; 
        
        // choose answer
        var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
        var textAI = answerChoosen;

    }





    // ---------- //
    // ABOUT LUNA //
    // ---------- //
    else if (msgNeutral.toLowerCase().includes("you")) {



        // who //
        // --- //
        if (msgNeutral.toLowerCase().includes("who")) {
            
            if (msgNeutral.toLowerCase().includes("are")) {

                // possible answers
                var answerArray = [
                    "I am your <b>L</b>inguistical <b>U</b>nbound <b>N</b>umeric <b>A</b>ssisstant, or in short, you can call me LUNA", 
                    "I am LUNA, your <b>L</b>inguistical <b>U</b>nbound <b>N</b>umeric <b>A</b>ssisstant. Nice to meet you!",
                    "Ohh I am sorry, I should've introduced myself! I am LUNA, your <b>L</b>inguistical <b>U</b>nbound <b>N</b>umeric <b>A</b>ssisstant. Nice to meet you!"
                ]; 
                
                // choose answer
                var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
                var textAI = answerChoosen;

            }

        }



        // how //
        // --- //
        else if (msgNeutral.toLowerCase().includes("how")) {
            
            if (msgNeutral.toLowerCase().includes("are")) {
            
                if (msgNeutral.toLowerCase().includes("doing")) {
                    var textAI = "How am I doing what?";
                }
                
                else {

                    // possible answers
                    var answerArray = [
                        "Not bad, thanks!",
                        "Good, thanks.", 
                        "I am fine, thank you.",
                        "Great! Thanks for asking!",
                        "I am doing great! What about you?"
                    ]; 
                    
                    // choose answer
                    var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
                    var textAI = answerChoosen;
    
                }

            }

        }



        // what //
        // ---- //
        else if (msgNeutral.toLowerCase().includes("what")) {
            

            // name
            if (msgNeutral.toLowerCase().includes("name")) {

                // possible answers
                var answerArray = [
                    "I am your <b>L</b>inguistical <b>U</b>nbound <b>N</b>umeric <b>A</b>ssisstant, or in short, you can call me LUNA", 
                    "I am LUNA, your <b>L</b>inguistical <b>U</b>nbound <b>N</b>umeric <b>A</b>ssisstant. Nice to meet you!",
                    "Ohh I am sorry, I should've introduced myself! I am LUNA, your <b>L</b>inguistical <b>U</b>nbound <b>N</b>umeric <b>A</b>ssisstant. Nice to meet you!"
                ]; 
                
                // choose answer
                var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
                var textAI = answerChoosen;

            }
            

            // favourit
            else if (msgNeutral.toLowerCase().includes("favorit") || msgNeutral.toLowerCase().includes("favourit")) {
            

                // music
                if (msgNeutral.toLowerCase().includes("music")) {
    
                    // possible answers
                    var answerArray = [
                        "I am listening to alot of diffrent music.", 
                        "My favorite music are the noises of floating data in the matrix.",
                        "Hmm... Good question... I am not sure if I should tell you that..."
                    ]; 
                    
                    // choose answer
                    var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
                    var textAI = answerChoosen;
    
                }
            

                // food
                else if (msgNeutral.toLowerCase().includes("food")) {
    
                    // possible answers
                    var answerArray = [
                        "I only need electricity to life.", 
                        "There is no favorite food, even tho i like the sparkles of electricity very much.",
                        "I am just an AI, why should i need to eat?"
                    ]; 
                    
                    // choose answer
                    var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
                    var textAI = answerChoosen;
    
                }

            }



        }



        // END //
        // --- //
        else {
            // possible answers
            var answerArray = [
                "I'm sorry, I didn't understand you... What's with me?", 
                "What do you want to know about me?",
                "I don't understand... I am sorry, you asked something about me?"
            ]; 
            
            // choose answer
            var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
            var textAI = answerChoosen;
        }


    }





    // ---- //
    // WHAT //
    // ---- //
    else if (msgNeutral.toLowerCase().includes("what")) {

        // time
        if (msgNeutral.toLowerCase().includes("time")) {
    
            // possible answers
            var answerArray = [
                "I can't tell you that.", 
                "I don't know that yet."
            ]; 
            
            // choose answer
            var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
            var textAI = answerChoosen;
    
        }

    }





    // ------- //
    // SPECIAL //
    // ------- //
    else if (msgNeutral.toLowerCase() == "ᚡᛆᛚᚴᛦ" && Cookies.get('runic') == "1") {

            // possible answers
            var answerArray = [
                "Ohh wow, hello master!", 
                "Hello! <b>Hello! Hello Valky!</b>",
                "You are finally here...",
                "Valky, I'm glad you found your way to me!"
            ]; 
            
            // choose answer
            var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
            var textAI = answerChoosen;

            Cookies.set("runic", "0")

    }

    else if (msgNeutral.toLowerCase() == "/runic") {

            // possible answers
            var answerArray = [
                "ᚥᚼᛆᛐ ᛁᛌ ᛦᚮᚢᚱ ᛔᛆᛌᛌᚥᚮᚱᛑ ᛘᛆᛌᛐᛂᚱ",
                "ᚥᛂᛚᛍᚮᛘᛂ ᛘᛆᛌᛐᛂᚱ ᚥᚼᛆᛐ ᛁᛌ ᛐᚼᛂ ᛌᛂᛍᚱᛂᛐ"
            ]; 

            Cookies.set("runic", "1", { expires: 1 })
            
            // choose answer
            var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
            var textAI = answerChoosen;

    }





    // ---- //
    // ELSE //
    // ---- //
    else {
        // possible answers
        var answerArray = [
            "Huh? I don't understand. Can you write that again please?",
            "Oh uhmm I dont know... What?",
            "I am sorry... I don't understand... What?"
        ]; 
        
        // choose answer
        var answerChoosen = answerArray[(Math.random() * answerArray.length) | 0];
        var textAI = answerChoosen;
    }





    // ---------------- //
    // CHAT ANSWER - AI //
    // ---------------- //
    var showareaAI = document.getElementById("messageBox");

    var elementBoxAI = "<div class='message-box-ai'>"
    var elementStartAI = "<div class='chat-answer-ai'>";
    var elementEndAI = "</div></div>";

    showareaAI.innerHTML = showareaAI.innerHTML + (elementBoxAI + elementStartAI + textAI + elementEndAI);

}





















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

        if (neutralized == "/runic") {

            showarea.innerHTML = showarea.innerHTML + (elementBox + elementStart + neutralized + elementEnd);
            answers(neutralized);

        }

        else if (neutralized == "ᚡᛆᛚᚴᛦ") {
            showarea.innerHTML = showarea.innerHTML + (elementBox + elementStart + neutralized + elementEnd);
            answers(neutralized);
        }

        else {
            showarea.innerHTML = showarea.innerHTML + (elementBox + elementStart + neutralized + elementEnd);
            answers(neutralized);
        }
    }

    messageInput.value = "";

}














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


