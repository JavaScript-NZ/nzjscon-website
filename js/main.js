$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $('.hero-block').removeClass('movin');
    } else {
      $('.hero-block').addClass('movin');
    }
  });
});
