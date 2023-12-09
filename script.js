const info1 = document.getElementById("info1");

function animateWord() {
  const words = ["Developer","Coder","Programmer","Photographer","Drummer","Guitarist"];
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      info1.lastElementChild.innerText =
        words[wordIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1400);
    }
  }

  function erase() {
    if (charIndex > 0) {
      info1.lastElementChild.innerText =
        words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
      setTimeout(type, 500);
    }
  }

  // Start the word animation
  type();
}

// Start the animation
animateWord();



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


