console.log("I'm here");

$(function(){

  $("#about").click(function() {
    $(".resume").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".reels").css('opacity', '0');

    function aboutModal() {
      $(".about").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".reels").css({
        "z-index": '0',
        height: '1200px'
      });
      $(".footer").css('top', '1400px');
    };
    setTimeout(aboutModal, 1000);
  });

  $("#resume").click(function() {
    $(".about").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".reels").css('opacity', '0');

    function resumeModal() {
      $(".resume").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".reels").css({
        "z-index": '0',
        height: '1200px'
      });
      $(".footer").css('top', '1400px');
    };
    setTimeout(resumeModal, 1000);
  });

  $("#headshots").click(function() {
    $(".resume").css('opacity', '0');
    $(".about").css('opacity', '0');
    $(".reels").css('opacity', '0');

    function headshotModal() {
      $(".headshots_and_photos").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".reels").css({
        "z-index": '0',
        height: '1200px'
      });
      $(".footer").css('top', '1400px');
    };
    setTimeout(headshotModal, 800);
  });

  $("#reels").click(function() {
    $(".resume").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".about").css('opacity', '0');
    $(".reels").css('height', '3500px');

    function reelsModal() {
      $(".reels").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".footer").css('top', '3700px');
    };
    setTimeout(reelsModal, 1000);
  });

  $("#news-reel").click(function() {
    $(".resume").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".about").css('opacity', '0');
    $(".reels").css('height', '3500px');

    function reelsModal() {
      $(".reels").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".footer").css('top', '3700px');
    };
    setTimeout(reelsModal, 1000);
  });

  $("#twitter").click(function(){
    window.open("https://twitter.com/paigesfunny", "_blank");
  });

  $("#facebook").click(function(){
    window.open("https://www.facebook.com/paige.barr.5", "_blank");
  });

  $("#email").click(function(){
    window.open("mailto:paigephone123@gmail.com?subject=After visiting your website...", "_blank");
  });

  $("#vimeo").click(function() {
    window.open("https://vimeo.com/user9917256", "_blank");
  });

  $("#youtube").click(function() {
    window.open("https://www.youtube.com/user/paigemcp", "_blank");
  });

})
