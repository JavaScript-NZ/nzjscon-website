$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $('.hero-block').removeClass('movin');
    } else {
      $('.hero-block').addClass('movin');
    }

    if ($(window).scrollTop() + window.innerHeight === document.body.scrollHeight) {
      $('.site-footer').addClass('movin');
    } else {
      $('.site-footer').removeClass('movin');
    }
  });

  $('.section-excerpt-read-more').click(function() {
    $(this).addClass('hidden');
    $(this).prev().addClass('hidden');
    $(this).next().removeClass('hidden');

    if ($(this).next().find('#map-canvas').length > 0) {
      initialize();
    }
  });
});
