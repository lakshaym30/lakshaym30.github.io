/* Your JS here. */
console.log('Hello World!')
var drake_modal = document.getElementById("drake_modal");
var drake_button = document.getElementById("drake");
var close = document.getElementsByClassName("close")[0];
var drake_iframe = document.getElementById("drake_iframe");
drake_button.onclick = function() {
    drake_modal.style.display = "block";
    drake_iframe.style.display = "block";
}

close.onclick = function() {
    drake_modal.style.display = "none";
    drake_iframe.style.display = "none";
}

var football_modal = document.getElementById("football_modal");
var football_button = document.getElementById("football");
var close = document.getElementsByClassName("close")[1];
var football_iframe = document.getElementById("football_iframe");
football_button.onclick = function() {
    football_modal.style.display = "block";
    football_iframe.style.display = "block";
}

close.onclick = function() {
    football_modal.style.display = "none";
    football_iframe.style.display = "none";
}

var bb_modal = document.getElementById("bb_modal");
var bb_button = document.getElementById("breaking_bad");
var close = document.getElementsByClassName("close")[2];
var bb_iframe = document.getElementById("bb_iframe");
bb_button.onclick = function() {
    bb_modal.style.display = "block";
    bb_iframe.style.display = "block";
}

close.onclick = function() {
    bb_modal.style.display = "none";
    bb_iframe.style.display = "none";
}

window.onscroll = function() {scrollFunction()};
var navbar = document.getElementById("navbar");
function scrollFunction() {
  
}

let currSlide = 1;
displaySlides(currSlide);

    // Next/previous controls
function shiftSlide(n) {
    displaySlides(currSlide += n);
}

    // Thumbnail image controls
function currentSlide(n) {
    displaySlides(currSlide = n);
}

function displaySlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        currSlide = 1;
    }
    if (n < 1) {
        currSlide = slides.length;
    } 

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currSlide-1].style.display = "block";
}

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("header a");
window.onscroll = function() {positionIndicate()};

function positionIndicate() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "2.5vh";
      } else {
        document.getElementById("navbar").style.padding = "5vh";
      }
      
    var current = '';
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (pageYOffset >= top - height / 3) {
            current = section.getAttribute("id");
        }
    })

    navLinks.forEach((a) => {
        a.classList.remove("current");
        if (a.classList.contains(current)) {
          a.classList.add("current");
        }
      });
}
    

//sources for carousel: https://www.w3schools.com/howto/howto_js_slideshow.asp
//sources for modals: https://www.w3schools.com/howto/howto_css_modals.asp 


