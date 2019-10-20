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

  $('#main-nav-items').click(function() {
    if ($(this).hasClass('in')) {
      $('.navbar-toggler').click();
    }
  });

  $('.talk-abstract-show').click(function() {
    $(this).addClass('hidden');
    $(this).next().removeClass('hidden');
  });

  $('.talk-abstract-hide').click(function() {
    $(this).parent().addClass('hidden');
    $(this).parent().prev().removeClass('hidden');
  });

  $('.food-list-tag-filter .btn').click(function() {
    var tag = $(this).data('tag');

    $('.food-list-tag-filter .btn').removeClass('selected');
    $(this).addClass('selected');

    if (tag === 'all') {
      $('.food-list li').removeClass('hidden');
    } else {
      $('.food-list li').addClass('hidden');
      $('.food-list li[data-type=' + tag + ']').removeClass('hidden');
    }
  });
});
