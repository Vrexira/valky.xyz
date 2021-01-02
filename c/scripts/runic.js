/**
 * RUNIC TRANSLATOR
 * ----------------
 * ----------------
 * @param {String} msg Needs a string as input to translate into valkyrian runes.
 * @returns {String} Returns the translated string.
 */
function transRunic(msg) {

    let msgL = msg.toLowerCase();

    const runicLetter = {
        a: "ᛆ",
        b: "ᛒ",
        c: "ᛍ",
        d: "ᛑ",
        e: "ᛂ",
        f: "ᚠ",
        g: "ᚵ",
        h: "ᚼ",
        i: "ᛁ",
        j: "ᛃ",
        k: "ᚴ",
        l: "ᛚ",
        m: "ᛘ",
        n: "ᚿ",
        o: "ᚮ",
        p: "ᛔ",
        q: "ᛩ",
        r: "ᚱ",
        s: "ᛌ",
        t: "ᛐ",
        u: "ᚢ",
        v: "ᚡ",
        w: "ᚥ",
        x: "ᛪ",
        y: "ᛦ",
        z: "ᛢ"
    };

    msgL = msgL.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, function(matched){
      return runicLetter[matched];
    });

    return msgL;

}
