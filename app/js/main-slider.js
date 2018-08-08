document.addEventListener('DOMContentLoaded', function () {

    const Slider = function (elemSelector) {
        this.currentSlide = 0;
        this.sliderSelector = elemSelector;
        this.elem = null;
        this.slider = null;
        this.slides = null;
        this.prev = null;
        this.next = null;

        this.generateSlider();
        this.changeSlide(this.currentSlide);

    }

    Slider.prototype.generateSlider = function () {
        this.slider = document.querySelector(this.sliderSelector);
        this.slider.classList.add('slider');


        const slidesCnt = document.createElement('div');
        slidesCnt.classList.add('slider-slides-cnt');


        this.slides = this.slider.children;

        while (this.slides.length - 2) {
            this.slides[0].classList.add('slider-slide');
            slidesCnt.appendChild(this.slides[0]);
        }

        this.slides = slidesCnt.children;

        this.slider.appendChild(slidesCnt);

    }

    const prevSlide = document.querySelector('.prev-slide');

    prevSlide.addEventListener('click', () => {
        console.log(slide.currentSlide);
        slide.currentSlide--;
        if (slide.currentSlide < 0) {
            slide.currentSlide = slide.slides.length - 1;
        };
        slide.changeSlide(slide.currentSlide);
    });

    const nextSlide = document.querySelector('.next-slide');

    nextSlide.addEventListener('click', () => {
        console.log(slide.currentSlide);
        slide.currentSlide++;
        if (slide.currentSlide > slide.slides.length - 1) {
            slide.currentSlide = 0;
        };
        slide.changeSlide(slide.currentSlide);
    });

    Slider.prototype.slideNext = function () {
        this.currentSlide++;
        if (this.currentSlide > this.slides.length - 1) {
            this.currentSlide = 0;
        }
        this.changeSlide(this.currentSlide);
        console.log(this);
    }

    Slider.prototype.changeSlide = function (index) {
    [].forEach.call(this.slides, function (slide) {
            slide.classList.remove('slider-slide-active');
            slide.setAttribute('aria-hidden', true);
        });

        this.slides[index].classList.add('slider-slide-active');
        this.slides[index].setAttribute('aria-hidden', false);

        console.log(this.currentSlide);

        let sliderBox = document.querySelectorAll('.slider-box');

        console.log(sliderBox[0]);

        if (this.currentSlide == 0) {
            sliderBox[3].classList.remove('forth')
            sliderBox[0].classList.add('first')
            sliderBox[1].classList.remove('second')
        } else if (this.currentSlide == 1) {
            sliderBox[0].classList.remove('first')
            sliderBox[1].classList.add('second')
            sliderBox[2].classList.remove('third')
        } else if (this.currentSlide == 2) {
            sliderBox[1].classList.remove('second')
            sliderBox[2].classList.add('third')
            sliderBox[3].classList.remove('forth')
        } else {
            sliderBox[2].classList.remove('third')
            sliderBox[3].classList.add('forth')
            sliderBox[0].classList.remove('first')
        };

        this.currentSlide = index;

        clearInterval(this.time);
        this.time = setTimeout(function () {
            this.slideNext();
        }.bind(this), 4000);
    };

    const slide = new Slider('#slider1');

});
