$(document).ready(function(){
  $('.feedback_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  	accessibility: false,
	  infinite: true,
	  speed: 500,
	  prevArrow: $('.feedback_btn__prev'),
	  nextArrow: $('.feedback_btn__next'),
  });

  var screenshotArray = [
  	'img/screenshots/screen1.jpg',
  	'img/screenshots/screen2.jpg',
  	'img/screenshots/screen3.jpg',
  	'img/screenshots/screen4.jpg',
  	'img/screenshots/screen5.jpg',
  	'img/screenshots/screen6.jpg',
  	'img/screenshots/screen7.jpg'
  ]
  var nextBtn = $('.screenshots_btn__next');
  var prevtBtn = $('.screenshots_btn__prev');
  var screenshotList = $('.screenshots_screen');
  
  function showScreenshots() {
	  $(screenshotList).each(function(i) {
	  	screenshotList[i].style.backgroundImage = "url(" + screenshotArray[i] + ")";
	  });
	}

	showScreenshots();

  $(prevtBtn).on('click', function(e) {
  	screenshotArray=screenshotArray.splice(-1).concat(screenshotArray);
  	showScreenshots();
  });

  $(nextBtn).on('click', function(e) {
  	screenshotArray=screenshotArray.splice(1).concat(screenshotArray);
  	showScreenshots();
  });
});

