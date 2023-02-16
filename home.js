function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 140;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);

TweenMax.from('.login-title',1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})


TweenMax.from('.login-form',1, {
    delay: 2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

