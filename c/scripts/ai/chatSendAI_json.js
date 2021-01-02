


// ---------------- //
// CHAT ANSWER - AI //
// ---------------- //
this.metakey = undefined;

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
    var msMapURL = "https://valky.xyz/m/json/welcome.json";


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
            let msgID = this.ID;
            let msgMetakey = this.metakey;
            let msgMessage = this.message;

            // metakey iterator
            var iteratorMetakey = msgMetakey.values();


            for (const valueMetakey of iteratorMetakey) if (msgNeutral.toLowerCase().includes(valueMetakey)) {

                // choose answer
                var textAI = msgMessage[(Math.random() * msgMessage.length) | 0];

                // send answer runic
                if (Cookies.get('runic') === 1) {
                    showareaAI.innerHTML = showareaAI.innerHTML + (elementBoxAI + elementStartAI + transRunic(textAI) + elementEndAI);
                    break;
                }

                // send answer normal
                else {
                    showareaAI.innerHTML = showareaAI.innerHTML + (elementBoxAI + elementStartAI + textAI + elementEndAI);
                    break;
                }

            }


        });

    });

}











