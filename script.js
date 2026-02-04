const upload = document.getElementById("upload");
const gallery = document.getElementById("gallery");

// Load saved images when page opens
window.onload = function () {

    const savedImages = JSON.parse(localStorage.getItem("scribbleImages")) || [];

    savedImages.forEach(src => {
        addImageToGallery(src);
    });

};

// Upload new image
upload.addEventListener("change", function () {

    const file = this.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Only images allowed 😤");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        const imageSrc = event.target.result;

        addImageToGallery(imageSrc);
        saveImage(imageSrc);

    };

    reader.readAsDataURL(file);

});

// Add image to page
function addImageToGallery(src) {

    const img = document.createElement("img");
    img.src = src;

    gallery.appendChild(img);

}

// Save image in browser storage
function saveImage(src) {

    const savedImages = JSON.parse(localStorage.getItem("scribbleImages")) || [];

    savedImages.push(src);

    localStorage.setItem("scribbleImages", JSON.stringify(savedImages));

}
