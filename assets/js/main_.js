const slider = document.querySelector('.slider');
let counter = 0;
const images = slider.querySelectorAll('img');
const totalImages = images.length;

function slideImage() {
    images[counter].style.opacity = 0;

    counter = (counter + 1) % totalImages;

    images[counter].style.opacity = 1;
}

// Change the image every 5 seconds (adjust as needed)
setInterval(slideImage, 5000);

