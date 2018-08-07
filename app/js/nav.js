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
