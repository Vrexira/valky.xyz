
// Read the json file for image-info
// ---------------------------------

imgMapURL = "/scripts/emotes.json"

itemDivSrc = '<img src="';
itemDivAlt = '" class="menu-item" alt="';
itemDivMid = '" data-toggle="tooltip" data-html="true" data-trigger="hover" data-placement="right" rel="tooltip" title="';
itemDivEnd = '">';


function addGlobalGallery(jsonFile) {
	$.get(jsonFile, function(data) {
        const newData = JSON.stringify(data);
        let endData = $.parseJSON(newData);
		$.each(endData, function(index, value) {

            let galleryGlobal;
            let galleryGlobalId;
            let galleryGlobalImg;

            // Variables read from json file
            let imgSrc = this.src;
            let imgCat = this.cat;
            let imgName = this.name;
            let imgDesc = this.description;

            let imgTip = "<b>" + imgName + "</b><hr><a href='" + imgDesc + "'></a>";


            // Check for category and create img element
            if (imgCat === "viola") {

                galleryGlobalImg = (imgDivURL + imgSrc + imgDivAlt + imgName + itemDivMid + imgTip + itemDivEnd)

                // Variables for gallery
                galleryGlobalId = "gallery-" + imgCat;
                galleryGlobal = document.getElementById(galleryGlobalId)

                // Add images to gallery
                galleryGlobal.innerHTML += galleryGlobalImg;

            }


            // Check for category and create img element
            if (imgCat === "luna") {

                galleryGlobalImg = (imgDivURL + imgSrc + imgDivAlt + imgName + itemDivMid + imgTip + itemDivEnd)

                // Variables for gallery
                galleryGlobalId = "gallery-" + imgCat;
                galleryGlobal = document.getElementById(galleryGlobalId)
            
                // Add images to gallery
                galleryGlobal.innerHTML += galleryGlobalImg;

            }
            
            
            // Check for category and create img element
			if (imgCat === "valky") {

                galleryGlobalImg = (imgDivURL + imgSrc + imgDivAlt + imgName + itemDivMid + imgTip + itemDivEnd)

                // Variables for gallery
                galleryGlobalId = "gallery-" + imgCat;
                galleryGlobal = document.getElementById(galleryGlobalId)
            
                // Add images to gallery
                galleryGlobal.innerHTML += galleryGlobalImg;

            }
            
        
		});
    });
}


addGlobalGallery(imgMapURL);