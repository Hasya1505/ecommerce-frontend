const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticy",this.window.scrollY >0);
})
   

// to open loction of product for this here js code 
function msg3()
 	{
 		window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.103277098414!2d72.63615587561743!3d23.239328579022377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b933477ba9f%3A0xe440409e66bea08a!2sLDRP%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1726500607906!5m2!1sen!2sin");
 	}
function msg4()
 	{
 		window.open("login.html");
 	}
const btn=document.querySelector('#btn')
 btn.addEventListener('click',function () {msg4()} )


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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}