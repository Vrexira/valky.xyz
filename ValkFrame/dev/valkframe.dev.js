/*!
  * ValkFrame v0.0.1 (https://vky.re/ValkFrame)
  * Copyright 2021 VALKYTEQ (https://valkyteq.com)
  * Licensed under MIT
  * IMPORTANT: Needs valkframe.dev.css added to the project
  */


/**
 * AMPLIFY MEDIA
 * ----------------
 * ----------------
 * - Allows to amplify media over 100%
 * - Media has to be inside a HTML5 media tag, i.e <video>
 * @param {Element} mediaElem Needs an element id as input.
 * @param {Number} multiplier Needs a floating number as input (0.0 - 9.9)
 * @returns {NULL} Does not return a value.
 */
function amplifyMedia(mediaElem, multiplier) {
    var context = new (window.AudioContext || window.webkitAudioContext),
        result = {
            context: context,
            source: context.createMediaElementSource(mediaElem),
            gain: context.createGain(),
            media: mediaElem,
            amplify: function(multiplier) { result.gain.gain.value = multiplier; },
            getAmpLevel: function() { return result.gain.gain.value; }
        };
    result.source.connect(result.gain);
    result.gain.connect(context.destination);
    result.amplify(multiplier);
    return result;
}


/**
 * SET ITEM FLAG
 * ----------------
 * ----------------
 * @param {String} Flag Needs a string as input to set it's current flag.
 * @param {String} Value Needs an integer or string as input to use it as current flag.
 * @returns {NULL} Does not return a value.
 */
function setItemFlag(Flag, Value) {

    window.localStorage.setItem(Flag, Value);

}


/**
 * GET ITEM FLAG
 * ----------------
 * ----------------
 * @param {String} Flag Needs a string as input to get it's current flag.
 * @returns {String} Returns the current flag as integer.
 */
function getItemFlag(Flag) {

    return window.localStorage.getItem(Flag);

}


/**
 * RESET ITEM FLAG
 * ----------------
 * ----------------
 * @param {String} Flag Needs a string as input which sets its flag to "0".
 * @returns {NULL} Does not return a value.
 */
function resetItemFlag(Flag) {

    window.localStorage.setItem(Flag, "");

}


/**
 * ADD IMAGE GALLERY
 * -----------------
 * -----------------
 * - Reads a JSON file to get informations about images to add to a gallery
 * - JSON file can contain following informations: src, cat, name, description, animated
 * - Adds a tooltip to the images when hovering above it
 * @param {JSON} jsonFile Needs a JSON File as input.
 * @returns {NULL} Does not return a value.
 */
function addImageGallery(jsonFile) {

    let itemDivSrc = '<img src="',
        itemDivAlt = '" class="gallery-size zoom" alt="',
        itemDivMid = '" data-toggle="tooltip" data-html="true" data-trigger="hover" data-placement="right" rel="tooltip" title="',
        itemDivEnd = '">';

    $.get(jsonFile, function(data) {
        const newData = JSON.stringify(data);
        let endData = $.parseJSON(newData);
        $.each(endData, function() {

            // Variables read from json file
            let {
                src: imgSrc,
                cat: imgCat,
                name: imgName,
                description: imgDesc,
                animated: imgAni
            } = this;

            let galleryGlobal, galleryGlobalId, galleryGlobalImg;
            let imgTip = "<b>" + imgName + "</b><hr>" + imgDesc;

            // Check for category and create img element
            if (imgCat !== "") {

                galleryGlobalImg = itemDivSrc + imgSrc + itemDivAlt + imgName + itemDivMid + imgTip + itemDivEnd

                // Variables for gallery
                galleryGlobalId = imgAni !== 1 ? "gallery-" + imgCat : "gallery-" + imgCat + "-anim";
                galleryGlobal = document.getElementById(galleryGlobalId)

                // Add images to gallery
                galleryGlobal.innerHTML += galleryGlobalImg;

            }

        });
    });

    setTimeout(function(){
        $('.gallery-size').tooltip();
    }, 200);

}


/**
 * BURGER X MENU
 * -----------------
 * -----------------
 * - Transforms the Burger Menu into an X with the onclick event
 * @param {Class} thisX Needs itself as class input.
 * @returns {NULL} Does not return a value.
 */
function burgerX(thisX) {
    thisX.classList.toggle("change");
}


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

    msgL = msgL.replace(/[a-z]/gi, function(matched){return runicLetter[matched]});

    return msgL;

}


/**
 * SPOILER TOGGLER
 * -----------------
 * -----------------
 * - Toggles a spoiler to show / hide content
 * @param {Class} thisX Needs a spoiler trigger class from an input button.
 * @returns {NULL} Does not return a value.
 */
function toggleSpoiler(trigger) {
    $(trigger).parent().next().collapse('toggle');
}