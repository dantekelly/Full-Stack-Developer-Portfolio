var Animated = false;

var resize = function () {
  if(window.innerWidth <= 630) {
    $('.animated').find('p').removeClass('text-animated');
    $('.animated').removeClass('animated');
  }
};
$(window).resize(resize);
resize();

// Skill Section logic
$('.array img').hover(function() {
  var target = $(this).closest('div');
  var current = $('.animated');

  if(target.not(".animated") && Animated == false && window.innerWidth > 630) {
    console.log('Sent ' + window.innerWidth);
    Animated = true;
    $(this).next('p').addClass('text-animated');
    target.addClass('animated');
  } else if(target.not(".animated") && window.innerWidth > 630){
    console.log('Sent ' + window.innerWidth);
    current.find('p').removeClass('text-animated');
    current.removeClass('animated');
    target.addClass('animated');
    target.find('p').addClass('text-animated');
  }
});

// Nav Hamburger Button Logic
$('#hamburger').on('click', function() {
  $('nav').slideToggle();
});
$('body').click(function(e) {
    if ($(e.target).closest('#hamburger').length === 0) {
      if($("nav").is(":visible")) {
        $("nav").slideToggle();
      }
    }
});
