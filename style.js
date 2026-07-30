

      
const slider = document.querySelector(".slider");

setInterval(() => {
    slider.style.transition = "transform .8s ease";
    slider.style.transform = "translateX(calc(-100% / 3 - 10px))";

    setTimeout(() => {
        slider.appendChild(slider.firstElementChild);

        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
    }, 800);

}, 5000);








const uniSlider = document.querySelector(".uni-card");
const uniCards = document.querySelectorAll(".uni-card-content");

let index = 0;
const visibleCards = 3;

setInterval(() => {

    const gap = 35;
    const cardWidth = uniCards[0].offsetWidth + gap;

    index++;

    if(index > uniCards.length - visibleCards){
        index = 0;
    }

    uniSlider.style.transform = `translateX(-${index * cardWidth}px)`;

},1000);
