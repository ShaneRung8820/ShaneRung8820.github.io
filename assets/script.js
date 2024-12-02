let current3DSlide = 0;
let current2DSlide = 0;

function change3DSlide(n) {
  show3DSlide(current3DSlide += n);
}

function show3DSlide(n) {
  const slides = document.querySelectorAll('.threeDslide');
  if (n >= slides.length) {
    current3DSlide = 0;
  }
  if (n < 0) {
    current3DSlide = slides.length - 1;
  }
  
  slides.forEach((slide, index) => {
    slide.style.display = index === current3DSlide ? 'block' : 'none';
  });
}

function change2DSlide(n) {
    show2DSlide(current2DSlide += n);
  }
  
function show2DSlide(n) {
    const slides = document.querySelectorAll('.twoDslide');
    if (n >= slides.length) {
        current2DSlide = 0;
    }
    if (n < 0) {
        current2DSlide = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === current2DSlide ? 'block' : 'none';
    });
}
  

// Initialize the first slideshow
show3DSlide(current3DSlide);
// Initialize the second slideshow
show2DSlide(current2DSlide);