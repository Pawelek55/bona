//Ruchoma navigacja

let nav = document.querySelector('nav');

function changeHeigth() {
    if (window.pageYOffset > 0) {
        nav.classList.add('nav-change');
    } else {
        nav.classList.remove('nav-change');
    }
}

document.addEventListener('scroll', changeHeigth)


//Below 756px

let ul = document.querySelector('.nav-list');
let hamburger = document.querySelector('.hamburger');
let toggle = document.querySelector('.toggle')


$(document).ready(function () {
    $(document).click((e) => {
        
        if (e.target == hamburger) {
            $(ul).toggleClass('show');
        } else{
            $(ul).removeClass('show');
        }

    });
});
