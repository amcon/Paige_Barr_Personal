$(function(){
console.log("I'm here");


  $("html, body").animate({ scrollTop: 0 }, 0);

  console.log(history.state);

  function titleDisappear() {
    $(".title-screen").css('opacity', '0');
  };
  setTimeout(titleDisappear, 1500);

  function titleDisappear2() {
    $(".title-screen").css('z-index', '0');
  };
  setTimeout(titleDisappear2, 3000);

  window.onpopstate = (event) => {
    // switch(event.state.doc) {
    //   case 'resume':
    //     console.log(event.state.doc)
    // }
    console.log(history.state);
    if (history.state.doc === 'resume') {
      $(".main-container").css('opacity', '0');
      $(".resume").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'about') {
      $(".main-container").css('opacity', '0');
      $(".about").css({
        opacity: '1',
        "z-index": '1'
      });
    }
  }


  $("#about").click(function() {
    $(".main-container").css('opacity', '0');

    function aboutModal() {
      history.pushState({doc: 'about'}, null, "/Paige_Barr_Personal/about");
      $(".about").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".reels-featured").css({
        "z-index": '0',
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(aboutModal, 1000);
  });



  $("#resume").click(function() {
    $(".about").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".reels-featured").css('opacity', '0');
    $(".reels-commercials").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');

    function resumeModal() {
       history.pushState({doc: 'resume'}, null, "/Paige_Barr_Personal/resume");
      $(".resume").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".reels-featured").css({
        "z-index": '0',
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(resumeModal, 1000);
  });

  $("#headshots").click(function() {
    $(".resume").css('opacity', '0');
    $(".about").css('opacity', '0');
    $(".reels-featured").css('opacity', '0');
    $(".reels-commercials").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');

    function headshotModal() {
      $(".headshots_and_photos").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".reels-featured").css({
        "z-index": '0',
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(headshotModal, 800);
  });



  $("#reels").click(function() {
    $(".resume").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".about").css('opacity', '0');
    $(".reels-commercials").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');

    function reelsModal() {
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
      $(".reels-commercials").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(reelsModal, 1000);
  });



  $(".box-commercials").click(function() {
    $(".reels-featured").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function commercialsModal() {
      $(".reels-commercials").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".reels-featured").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(commercialsModal, 800);
  });


  $(".box-featured").click(function() {
    $(".reels-commercials").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function featuredModal() {
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(featuredModal, 800);
  });


  $(".box-legit").click(function() {
    $(".reels-commercials").css('opacity', '0');
    $(".reels-featured").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function legitModal() {
      $(".reels-legit").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-featured").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(legitModal, 800);
  });


  $(".box-voiceover").click(function() {
    $(".reels-commercials").css('opacity', '0');
    $(".reels-featured").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-writing").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function voiceModal() {
      $(".reels-voiceover").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-featured").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-writing").css('z-index', '0');
    };
    setTimeout(voiceModal, 800);
  });


  $(".box-writing").click(function() {
    $(".reels-commercials").css('opacity', '0');
    $(".reels-featured").css('opacity', '0');
    $(".reels-legit").css('opacity', '0');
    $(".reels-voiceover").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function writingModal() {
      $(".reels-writing").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".reels-commercials").css('z-index', '0');
      $(".reels-featured").css('z-index', '0');
      $(".reels-legit").css('z-index', '0');
      $(".reels-voiceover").css('z-index', '0');
    };
    setTimeout(writingModal, 800);
  });



  $(".news-reel").click(function() {
    $(".resume").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".about").css('opacity', '0');

    function reelsModal() {
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
    };
    setTimeout(reelsModal, 1000);
  });

  $(".news-legit").click(function() {
    $(".resume").css('opacity', '0');
    $(".headshots_and_photos").css('opacity', '0');
    $(".about").css('opacity', '0');

    function reelsModal() {
      $(".reels-legit").css({
        opacity: '1',
        "z-index": '1'
      });
      $(".about").css('z-index', '0');
      $(".resume").css('z-index', '0');
      $(".headshots_and_photos").css('z-index', '0');
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
