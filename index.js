function slidesPlugin (activeSlide) {
    let slides = document.querySelectorAll('.slide');
    slides[activeSlide].classList.add('active')

    for(let slide of slides) {
        slide.addEventListener('click', () => {
            removeClassActive()
            slide.classList.add('active')
        })
    }
    
    function removeClassActive() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(3)

