// --- Global UI Logic (script.js) ---

// 1. Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    // Toggles the 'sticky' class based on scroll position
    header.classList.toggle("sticky", window.scrollY > 0);
});


// 2. Mobile Menu Toggle
const menu = document.querySelector('.navmenu');
const menuIcon = document.querySelector('#menu-icon');

menuIcon.onclick = () => {
    // Toggles the 'open' class for mobile navigation
    menu.classList.toggle('open');
    menuIcon.classList.toggle('bx-x'); // Change icon to 'X' when open
};

// Close menu when a navigation link is clicked
document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            menuIcon.classList.remove('bx-x');
        }
    });
});


// 3. Client Review Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Loop back to the first slide if we go past the last one
    if (n > slides.length) {
        slideIndex = 1
    }
    
    // Loop to the last slide if we go before the first one
    if (n < 1) {
        slideIndex = slides.length
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove 'active-dot' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Display the current slide and mark the current dot as active
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active-dot";
    }
}


// 4. Utility Bar Functions (Simulated)

// Function for the 'TRACK ORDER' button
function msg3() {
 		window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.103277098414!2d72.63615587561743!3d23.239328579022377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b933477ba9f%3A0xe440409e66bea08a!2sLDRP%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1726500607906!5m2!1sen!2sin");
 	}

// Function for the 'LOGIN' button (simulated navigation)
const loginBtn = document.getElementById('btn');
loginBtn.addEventListener('click', () => {
   	{
 		window.open("login.html");
 	}
});