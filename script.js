document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.box');
  
    function showBoxes() {
      boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (boxTop < windowHeight) {
          box.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', showBoxes);
    showBoxes();
  });
  