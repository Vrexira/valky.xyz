
// Read the json file for image-info
// ---------------------------------

imgMapURL = "https://valky.xyz/m/json/emotes.json"

itemDivSrc = '<img src="';
itemDivAlt = '" class="gallery-size zoom" alt="';
itemDivMid = '" data-toggle="tooltip" data-html="true" data-trigger="hover" data-placement="right" rel="tooltip" title="';
itemDivEnd = '">';


function addGlobalGallery(jsonFile) {
	$.get(jsonFile, function(data) {
        const newData = JSON.stringify(data);
        let endData = $.parseJSON(newData);
		$.each(endData, function(index, value) {

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
            if (imgCat === "heralyn" || imgCat === "mercymain" || imgCat === "ssupermexicant" || imgCat === "misc") {

                galleryGlobalImg = (itemDivSrc + imgSrc + itemDivAlt + imgName + itemDivMid + imgTip + itemDivEnd)

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


addGlobalGallery(imgMapURL);