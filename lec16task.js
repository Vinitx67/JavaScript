window.onload = function () {
    var firstImage = document.querySelector(".slidermain").firstElementChild;
    var dummyImage = document.createElement("img");
    dummyImage.setAttribute("src", firstImage.getAttribute("src"));
    document.querySelector(".slidermain").appendChild(dummyImage);
    dummyImage.setAttribute("alt", "dummy image");

    var currentImage = 0; // Adjusted index to match the array
    var allImages = document.querySelectorAll(".slidermain .slider-img");
    var indicatorContainer = document.createElement("div");
    indicatorContainer.classList.add("slider-indicators");

    // Generate indicators dynamically
    allImages.forEach((_, index) => {
        var indicator = document.createElement("button");
        indicator.classList.add("indicator");
        if (index === currentImage) {
            indicator.classList.add("active-indicator");
        }
        indicator.addEventListener("click", function () {
            goToImage(index);
        });
        indicatorContainer.appendChild(indicator);
    });

    document.querySelector(".slidermain").appendChild(indicatorContainer);

    function updateIndicators() {
        document.querySelectorAll(".slider-indicators .indicator").forEach((el, index) => {
            el.classList.toggle("active-indicator", index === currentImage);
        });
    }

    function goToImage(index) {
        allImages.forEach((el) => el.classList.remove("active"));
        currentImage = index;
        allImages[currentImage].classList.add("active");
        updateIndicators();
    }

    var sliderAnim = setInterval(nextImage, 5000);
};
