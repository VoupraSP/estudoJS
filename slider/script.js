const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');

previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)

function onPreviousClick() {
    const sliderWidth = sliderEl.offsetWidth; // pega o tamanho do slide
    sliderEl.scrollLeft -= sliderWidth; // deslisa para o lado co o tamano total
}

function onNextClick() {
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
}