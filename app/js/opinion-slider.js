//Slider of opinion


let opinionSlider = document.querySelector('.opinion-slider');
let opinionSlideCount = opinionSlider.childElementCount;
let opinionSlideWidth = 100 / opinionSlideCount;
let opinionSlideIndex = 0;


opinionSlider.style.width = opinionSlideCount * 50 + '%';

let opinionSingleSlides = document.querySelectorAll('.opinion-slides');



let opinionArr = Array.from(opinionSingleSlides);

for (let i = 0; i < opinionSlideCount; i++) {
    opinionArr[i].style.width = opinionSlideWidth + '%';
    opinionArr[i].style.marginLeft = opinionSlideIndex * opinionSlideWidth + '%';
    opinionSlideIndex = opinionSlideIndex + 1;
}


let marginLeft;
let opinionNewSlideIndex
let dotsContainer = document.querySelector('.slider-dots');
let dots = document.querySelectorAll('.slider-dots-element');

let bigInterval = setInterval(slide, 4000);

function slide(e) {
    if (opinionSlideIndex > 5) {
        opinionSlideIndex = 0;
    }

    //    if (e.target == dotsContainer) return;

    //    let marginLeft = opinionSlideIndex * opinionSlideWidth + '%';
    marginLeft = opinionSlideIndex * -50 + '%';
    //    console.log(marginLeft)

    opinionSlideIndex = opinionSlideIndex + 1;
    opinionNewSlideIndex = opinionSlideIndex + 1;

    $(opinionSlider).animate({
        'margin-left': marginLeft
    }, 800, function () {
        opinionSlideIndex = opinionNewSlideIndex;
    })

    //    console.log(opinionSlideIndex)
    let dotsArr = Array.from(dots)

}

if (window.innerWidth < 768) {
    opinionSlideIndex = 0;
    opinionSlider.style.width = opinionSlideCount * 100 + '%';

    for (let i = 0; i < opinionSlideCount; i++) {
        opinionArr[i].style.marginLeft = opinionSlideIndex * opinionSlideWidth / 2 + '%';
        if (i % 2 == 0) {
            console.log(opinionArr[i])
        } else {
            opinionArr[i].style.marginLeft = opinionArr[i - 1].style.marginLeft;
            console.log(opinionArr[i])
        }
        opinionSlideIndex = opinionSlideIndex + 1;
    }

}

function below(){
if (window.innerWidth < 768) {
    opinionSlideIndex = 0;
    opinionSlider.style.width = opinionSlideCount * 100 + '%';

    for (let i = 0; i < opinionSlideCount; i++) {
        opinionArr[i].style.marginLeft = opinionSlideIndex * opinionSlideWidth / 2 + '%';
        if (i % 2 == 0) {
            console.log(opinionArr[i])
        } else {
            opinionArr[i].style.marginLeft = opinionArr[i - 1].style.marginLeft;
            console.log(opinionArr[i])
        }
        opinionSlideIndex = opinionSlideIndex + 1;
    }

} else{
        opinionSlider.style.width = opinionSlideCount * 50 + '%';
    }
}

window.addEventListener('resize', below)





// Buttons

/*
dots.forEach(dot => dot.addEventListener('click', (e) => {
    console.dir(e.target.textContent);
    for (let dot of dots) {
        dot.classList.remove('slider-dots-element-active');

    }
    if (e.target.textContent == 1) {
        e.target.parentElement.classList.add('slider-dots-element-active');
        marginLeft = 0 * -50 + '%';
        $(opinionSlider).animate({
            'margin-left': marginLeft
        }, 800, function () {
            opinionSlideIndex = opinionNewSlideIndex;
        })
//        opinionSlideIndex = opinionSlideIndex + 1;
//        opinionNewSlideIndex = opinionSlideIndex + 1;
        clearInterval(slide)
        setInterval(slide, 3000);
        
    } else if (e.target.textContent == 2) {
        e.target.parentElement.classList.add('slider-dots-element-active');
        marginLeft = 2 * -50 + '%';
        $(opinionSlider).animate({
            'margin-left': marginLeft
        }, 800, function () {
            opinionSlideIndex = opinionNewSlideIndex;
        })
//        opinionSlideIndex = opinionSlideIndex + 1;
//        opinionNewSlideIndex = opinionSlideIndex + 1;
        clearInterval(slide)
        setInterval(slide, 3000);
    } else {
        e.target.parentElement.classList.add('slider-dots-element-active');
        marginLeft = 4 * -50 + '%';
        $(opinionSlider).animate({
            'margin-left': marginLeft
        }, 800, function () {
            opinionSlideIndex = opinionNewSlideIndex;
        })
//        opinionSlideIndex = opinionSlideIndex + 1;
//        opinionNewSlideIndex = opinionSlideIndex + 1;
        clearInterval(slide)
        setInterval(slide, 3000);
    }

}));
*/



/*slideIndex = 0;

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
    }
});

previousSlide.addEventListener('click', function () {
    slideIndex = slideIndex - 1;
    slider.style.marginLeft = slideIndex * -100 + '%';
    if (slideIndex == -1) {
        slideIndex = slideCount - 1;
        slider.style.marginLeft = slideIndex * -100 + '%';
    }
});*/

/*let timeLoop = setInterval(nextTime, 3000);

function nextTime() {
    console.log('domek')
    opinionSlideIndex = opinionSlideIndex + 2;
    opinionSlider.style.marginLeft = opinionSlideIndex * -50 + '%';

    if (opinionSlideIndex > 4) {
        opinionSlideIndex = 0;
        opinionSlider.style.marginLeft = opinionSlideIndex * -50 + '%';
    }   
}*/

/*    if (opinionSlideIndex < 2) {
        dotsArr[2].classList.remove('slider-dots-element-active');
        dotsArr[0].classList.add('slider-dots-element-active');
    } else if (opinionSlideIndex < 4) {
        dotsArr[0].classList.remove('slider-dots-element-active');
        dotsArr[1].classList.add('slider-dots-element-active');
    } else {
        dotsArr[1].classList.remove('slider-dots-element-active');
        dotsArr[2].classList.add('slider-dots-element-active');
    }*/
