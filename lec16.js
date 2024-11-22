window.onload = function () {
    var firstImage = document.querySelector(".slidermain").firstElementChild;
    var dummyImage = document.createElement("img");
    dummyImage.setAttribute("src", firstImage.getAttribute("src"));
    document.querySelector(".slidermain").appendChild(dummyImage);
    dummyImage.setAttribute("alt", "dummy image");
    // DYNAMICALLY ADDS A CHILD ELEMENT TO SLIDER MAIN

    var currentImage = 1;
    var allImages = document.querySelectorAll(".slidermain .slider-img");

    document.querySelector(".slidermain .prev").addEventListener("click", prevImage);
    document.querySelector(".slidermain .next").addEventListener("click", nextImage);

    function nextImage() {
        // REMOVING ACTIVE CLASS FROM ALL IMAGES
        allImages.forEach((el) => el.classList.remove("active"));
        if (currentImage > allImages.length - 1) {
            currentImage = 0;
        }
        allImages[currentImage].classList.add("active");
        currentImage++;
    }

    function prevImage() {
        // REMOVING ACTIVE CLASS FROM ALL IMAGES
        allImages.forEach((el) => el.classList.remove("active"));
        if (currentImage < 0) {
            currentImage = allImages.length - 1;
        }
        allImages[currentImage].classList.add("active");
        currentImage--;
    }
    var sliderAnim = setInterval(nextImage, 5000)

}