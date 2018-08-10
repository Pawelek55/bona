document.addEventListener('DOMContentLoaded', function(){
    

const gallery = document.querySelector('#gallery')
const photosContainer = document.querySelector('.photos-container');
const photos = document.querySelectorAll('.photos');

let windowHeight = window.outerHeight + 'px';
let windowWidth = window.outerWidth + 'px';

    console.log(window);
    
let boxBigPhoto = document.createElement('div');
gallery.appendChild(boxBigPhoto);


let newBigPhoto = document.createElement('div');
newBigPhoto.classList.add('newBigPhoto');


let cross = document.createElement('div');
cross.classList.add('cross');
cross.innerHTML = '<i class="fas fa-times"></i>';

let leftArrow = document.createElement('div');
leftArrow.classList.add('left-arrow');
leftArrow.innerHTML = '<i class="fas fa-angle-left"></i>'

let rightArrow = document.createElement('div');
rightArrow.classList.add('right-arrow');
rightArrow.innerHTML = '<i class="fas fa-angle-right"></i>';

let currentPhoto

function showMore(e) {

    boxBigPhoto.classList.add('box-big-photo');
    boxBigPhoto.style.height = windowHeight;
    boxBigPhoto.style.width = windowWidth;
    document.body.style.overflow = 'hidden';

    boxBigPhoto.appendChild(newBigPhoto);
    boxBigPhoto.appendChild(cross);
    boxBigPhoto.appendChild(leftArrow);
    boxBigPhoto.appendChild(rightArrow);

    let choosenPhoto = $(e.target).css('backgroundImage');
    newBigPhoto.style.backgroundImage = choosenPhoto;
    
    currentPhoto = e.target;
    return currentPhoto;

}

photos.forEach(photo => photo.addEventListener('click', showMore))


cross.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target) {
        boxBigPhoto.classList.remove('box-big-photo');
        boxBigPhoto.style.height = 0;
        document.body.style.overflow = 'auto';

        boxBigPhoto.removeChild(newBigPhoto);
        boxBigPhoto.removeChild(cross);
        boxBigPhoto.removeChild(leftArrow);
        boxBigPhoto.removeChild(rightArrow);
    }
})

rightArrow.addEventListener('click', (e) => {
        if(currentPhoto.nextElementSibling == null) return;

        newChoosenPhoto = $(currentPhoto.nextElementSibling).css('backgroundImage');

        newBigPhoto.style.backgroundImage = newChoosenPhoto;
        currentPhoto = currentPhoto.nextElementSibling;        
    });

leftArrow.addEventListener('click', (e) => {
    
        if(currentPhoto.previousElementSibling == null) return;
    
        newChoosenPhoto = $(currentPhoto.previousElementSibling).css('backgroundImage');
        newBigPhoto.style.backgroundImage = newChoosenPhoto;
        currentPhoto = currentPhoto.previousElementSibling;
        
    });
    
});