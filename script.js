const imageRow = document.getElementById('image-row');
const images = imageRow.querySelectorAll('img');

let currentIndex = 0;

images[currentIndex].classList.add('active');

function img() {
  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000);
}

img();