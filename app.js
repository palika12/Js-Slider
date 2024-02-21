document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    let currentIndex = 0;
    const slideWidth = slideItems[0].clientWidth;
  
    function goToSlide(index) {
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
    }
  
    function slideNext() {
      if (currentIndex < slideItems.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    }
  
    function slidePrev() {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      } else {
        goToSlide(slideItems.length - 1);
      }
    }
  
    nextBtn.addEventListener('click', slideNext);
    prevBtn.addEventListener('click', slidePrev);
  });
  