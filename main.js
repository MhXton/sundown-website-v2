document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});


function page4Animation(){ 
    var hoverContainer = document.querySelector("#hover-container");
    var fixed = document.querySelector("#fixed-image");
    
    hoverContainer.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
    });
    
    hoverContainer.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
    });
    
    var effects = document.querySelectorAll(".box-effect");
    effects.forEach(function(hover) {
        hover.addEventListener("mouseenter", function() {
            var image = hover.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
}

swiperAnimation()
page4Animation()