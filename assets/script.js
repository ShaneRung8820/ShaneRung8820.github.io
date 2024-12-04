let current3DSlide = 0;
let current2DSlide = 0;

/* Called by the previous and next buttons with n = 1 or n = -1.*/
function change3DSlide(n) { 
  show3DSlide(current3DSlide += n);
}
// Displays slide n. The number each slide is given is determined by the order they appear in the HTML file
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

/* Called by the previous and next buttons with n = 1 or n = -1.*/
function change2DSlide(n) { 
    show2DSlide(current2DSlide += n);
  }

// Displays slide n. The number each slide is given is determined by the order they appear in the HTML file
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

//Creates an element with my email as the value and copies it to the clipboard
function copyEmail() { 
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', "shane.rung@gmail.com");
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}