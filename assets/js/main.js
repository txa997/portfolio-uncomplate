(function ($) {
"use strict";


// menu acitve

const btns = document.querySelectorAll(".menu-btn"); 

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  });

}




window.addEventListener('load',function(){
	document.querySelector('.loader-wrapper').classList.add("preloader-active")  
  });








// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});




})(jQuery);