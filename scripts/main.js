//$(document).ready(function() {
//  $(".html5").hover(function() {
//    alert('Triggered');
//  });
//});

//$(document).ready(function() {
    //var items = document.querySelectorAll('.array div');
    //for(var i = 1, l = items.length+1; i < l; i++) {

    //}
//  }
/*
var hover = false;
var element = [];
  $(".array div *").hover(function() {
    if(hover == false) {
      element.push(this);
      $(this).addClass('animated');
    } else {
      element.pop();
      $(element[i]).removeClass('animated');
      $(this).addClass('animated');
    }
  });
//});
*/

var someonesAnimated = false;
var animatedPerson = [];

$('.array div *').hover(function() {
  var whatAmI = $(this).closest('.div');
  if($(this).closest('div').not(".animated") && someonesAnimated == false) {
    someonesAnimated = true;
    animatedPerson.push($(this).closest('div'));
    $(this).closest('div').addClass('animated');
    $(this).children('p').css('display','block');
    alert('First come first server!');
  } else if($(this).closest('div').not(".animated")){
    someonesAnimated = true;
    animatedPerson[0].removeClass('animated');
    animatedPerson[0].children('p').css('display','none');
    animatedPerson.pop();
    animatedPerson.push($(this).closest('div'));
    $(this).closest('div').addClass('animated');
    $(this).children('p').css('display','block');
    alert('Moving someone else out');
  } else {
    alert('You are animated! You stay there!');
  }
}, 2000);


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
