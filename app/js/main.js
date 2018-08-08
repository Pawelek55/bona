document.addEventListener('DOMContentLoaded', function () {

    // Slider 

    let slider = document.querySelector('.slider');
    let slideCount = slider.childElementCount;
    let slideWidth = 100 / slideCount;
    let slideIndex = 0;


    slider.style.width = slideCount * 100 + '%';

    let singleSlides = document.querySelectorAll('.single-slide');

    let nextSlide = document.querySelector('.next-slide');
    let previousSlide = document.querySelector('.prev-slide');

    let slideArr = Array.from(singleSlides);

    for (let i = 0; i < slideCount; i++) {
        slideArr[i].style.width = slideWidth + '%';
        slideArr[i].style.marginLeft = slideIndex * slideWidth + '%';
        slideIndex = slideIndex + 1;
    };

    slideIndex = 0;

    nextSlide.addEventListener('click', function () {

        // clearInterval(this.time);
        //    this.time = setInterval(function() {
        //        this.slideNext();
        //    }.bind(this), 6000); //co 6 sekund automatycznie się przełączy

        slideIndex = slideIndex + 1;
        slider.style.marginLeft = slideIndex * -100 + '%';

        if (slideIndex > 3) {
            slideIndex = 0;
            slider.style.marginLeft = slideIndex * -100 + '%';
        };

        changeBox();
    });


    previousSlide.addEventListener('click', function () {
        slideIndex = slideIndex - 1;
        slider.style.marginLeft = slideIndex * -100 + '%';
        if (slideIndex == -1) {
            slideIndex = slideCount - 1;
            slider.style.marginLeft = slideIndex * -100 + '%';
        };

        changeBox();

    });
    let timeLoop = setInterval(nextTime, 3000);

    function nextTime() {
        slideIndex = slideIndex + 1;
        slider.style.marginLeft = slideIndex * -100 + '%';

        if (slideIndex > 3) {
            slideIndex = 0;
            slider.style.marginLeft = slideIndex * -100 + '%';
        };
        changeBox();
    };


    //Slider box

    let sliderBox = document.querySelectorAll('.slider-box');

    let boxArray = Array.from(sliderBox);

    function changeBox() {
        if (slideIndex == 0) {
            boxArray[0].classList.add('first');
            boxArray[3].classList.remove('forth');
            boxArray[1].classList.remove('second');
        } else if (slideIndex == 1) {
            boxArray[1].classList.add('second');
            boxArray[0].classList.remove('first');
            boxArray[2].classList.remove('third');
        } else if (slideIndex == 2) {
            boxArray[2].classList.add('third');
            boxArray[1].classList.remove('second');
            boxArray[3].classList.remove('forth');
        } else {
            boxArray[3].classList.add('forth');
            boxArray[2].classList.remove('third');
            boxArray[0].classList.remove('first');
        };
    };
    
        console.log(slideIndex)

    
    
//    setInterval(slide, 3000);
//
//
//
//function slide(e) {
//    if (slideIndex > 4) {
//        slideIndex = 0;
//    }
//
//
////    if (e.target == dotsContainer) return;
//
//    //    let marginLeft = opinionSlideIndex * opinionSlideWidth + '%';
//    marginLeft = slideIndex * -100 + '%';
//    //    console.log(marginLeft)
//
//    slideIndex = slideIndex 
//    let newSlideIndex = slideIndex + 1;
//
//    $(slider).animate({
//        'margin-left': marginLeft
//    }, 800, function () {
//        slideIndex = newSlideIndex;
//    })
//
////    console.log(opinionSlideIndex)
////    let dotsArr = Array.from(dots)
//
//}
    
    
    
    
    
});

