let slideIndex = 1;
let slideTimer;

// Initialize the slideshow when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    startAutoSlide();
});

// Next/previous controls
function plusSlides(n) {
    clearTimeout(slideTimer); // Clear the timer when the user manually changes the slide
    showSlides(slideIndex += n);
    startAutoSlide(); // Restart the timer after manual navigation
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and add "active" class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Function to start the automatic slideshow
function startAutoSlide() {
    slideTimer = setTimeout(function() {
        showSlides(slideIndex += 1);
        startAutoSlide(); // Automatically change slide every 30 seconds
    }, 30000); // 30 seconds interval
}