console.log("I'm here");

$(function(){

  $("#about").click(function() {
    $(".about").css('z-index', '1');
    $(".resume").css('z-index', '0');
    $(".headshots_and_photos").css('z-index', '0');
    $(".reels").css('z-index', '0');
  });

  $("#resume").click(function() {
    $(".resume").css('z-index', '1');
    $(".about").css('z-index', '0');
    $(".headshots_and_photos").css('z-index', '0');
    $(".reels").css('z-index', '0');
  });

  $("#headshots").click(function() {
    $(".headshots_and_photos").css('z-index', '1');
    $(".about").css('z-index', '0');
    $(".resume").css('z-index', '0');
    $(".reels").css('z-index', '0');
  });

  $("#reels").click(function() {
    $(".reels").css({
      "z-index": '1',
      height: '3500px'
    });
    $(".about").css('z-index', '0');
    $(".resume").css('z-index', '0');
    $(".headshots_and_photos").css('z-index', '0');
    $(".footer").css('top', '3700px');
  });

})
