$('.landing-arrow').click(function() {
  var sectionTo = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(sectionTo).offset().top
  }, 1500);
  return false;
});