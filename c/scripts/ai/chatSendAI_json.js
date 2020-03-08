


// ---------------- //
// CHAT ANSWER - AI //
// ---------------- //
function answers(msgNeutral) {



    // translate all AI messages into runes
    if (msgNeutral.toLowerCase() == "/runic") {

        // disable
        if (Cookies.get('runic') == 1) {
            Cookies.set('runic', 0);
            Cookies.set('admin', 0);
        } 

        // enable
        else {
            Cookies.set('runic', 1);
        }

    }


    // allow table view
    if (msgNeutral == "ᛆᛑᛘᛁᚿ" && Cookies.get('runic') == 1) {
        Cookies.set('admin', 1);
    }




    // path to JSON
    var msMapURL = "/m/json/welcome.json";


    // variables for messages
    var showareaAI = document.getElementById("messageBox");
    var elementBoxAI = "<div class='message-box-ai'>";
    var elementStartAI = "<div class='chat-answer-ai'>";
    var elementEndAI = "</div></div>";


    // load json
    $.get(msMapURL, function(data) {

        var newData = JSON.stringify(data);
        var endData = $.parseJSON(newData);

        $.each(endData, function(index, value) {

            // read from JSON file
            msgID = this.ID;
            msgMetakey = this.metakey;
            msgMessage = this.message;

            // metakey iterator
            var iteratorMetakey = msgMetakey.values();


            for (const valueMetakey of iteratorMetakey) {

                if (msgNeutral.toLowerCase().includes(valueMetakey)) {

                    // choose answer
                    var answerChoosen = msgMessage[(Math.random() * msgMessage.length) | 0];
                    var textAI = answerChoosen;


                    // send answer

                    // runic
                    if (Cookies.get('runic') == 1) {

                        showareaAI.innerHTML = showareaAI.innerHTML + (elementBoxAI + elementStartAI + transRunic(textAI) + elementEndAI);
                        break;

                    }
                    
                    // normal
                    else {

                        showareaAI.innerHTML = showareaAI.innerHTML + (elementBoxAI + elementStartAI + textAI + elementEndAI);
                        break;

                    }



                }

            }





        });



    });

}











