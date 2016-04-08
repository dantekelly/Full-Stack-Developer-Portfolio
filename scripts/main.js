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
$('.array div *'').hover(function() {
  $(this).addClass('animated');
});
