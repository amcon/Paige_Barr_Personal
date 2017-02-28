$(function(){

  // this ensures that on reload, the scroll position is at the top for
  // the title page load.
  $("html, body").animate({ scrollTop: 0 }, 0);



  // using pushState to set the initial state of the application
  history.pushState({doc: 'title'}, null, "/Paige_Barr_Personal/");

  // titleDisappear1 & 2 are the functions used to animate the title
  // screen. It waits a second and a half to activate the fade-out, and
  // then makes sure the z-index is changed so you can click on the
  // main site
  function titleDisappear() {
    $(".title-screen").css('opacity', '0');
    $(".initial").css('opacity', '1');
  };
  setTimeout(titleDisappear, 1500);
  function titleDisappear2() {
    history.pushState({doc: 'home'}, null, "/Paige_Barr_Personal/");
    $(".title-screen").css('z-index', '0');
  };
  setTimeout(titleDisappear2, 3000);



  // whenever the back button is clicked on the browser, we need to inform
  // the page what elements to load based on the state object it is given.
  window.onpopstate = (event) => {

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
    } else if (history.state.doc === 'headshots') {
      $(".main-container").css('opacity', '0');
      $(".headshots_and_photos").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'reels') {
      $(".main-container").css('opacity', '0');
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'reels-featured') {
      $(".main-container").css('opacity', '0');
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'reels-commercials') {
      $(".main-container").css('opacity', '0');
      $(".reels-commercials").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'reels-legit') {
      $(".main-container").css('opacity', '0');
      $(".reels-legit").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'reels-voiceover') {
      $(".main-container").css('opacity', '0');
      $(".reels-voiceover").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'reels-writing') {
      $(".main-container").css('opacity', '0');
      $(".reels-writing").css({
        opacity: '1',
        "z-index": '1'
      });
    } else if (history.state.doc === 'home') {
      $(".main-container").css('opacity', '0');
      $(".about").css({
        opacity: '1',
        "z-index": '1'
      });
    } else {
      $(".main-container").css('opacity', '0');
      $(".about").css({
        opacity: '1',
        "z-index": '1'
      });
    }
  };





  // these click functions and setTimeouts are the CSS transitions given to the
  // single page application to make it seem multi-page and seamless. It causes
  // the container its on to fade away, and then brings the new view into site,
  // which activates a fade in.

  $("#about").click(function() {
    $(".main-container").css('opacity', '0');

    function aboutModal() {
      history.pushState({doc: 'about'}, null, "/Paige_Barr_Personal/#/about");
      $(".main-container").css('z-index', '0');
      $(".writing").children('iframe').remove();
      $(".about").css({
        opacity: '1',
        "z-index": '1'
      });
    };
    setTimeout(aboutModal, 1000);
  });



  $("#resume").click(function() {
    $(".main-container").css('opacity', '0');

    function resumeModal() {
       history.pushState({doc: 'resume'}, null, "/Paige_Barr_Personal/#/resume");
       $(".main-container").css('z-index', '0');
       $(".writing").children('iframe').remove();
       $(".resume").css({
         opacity: '1',
         "z-index": '1'
        });
      };
      setTimeout(resumeModal, 1000);
  });




  $("#headshots").click(function() {
    $(".main-container").css('opacity', '0');

    function headshotModal() {
      history.pushState({doc: 'headshots'}, null, "/Paige_Barr_Personal/#/headshots");
      $(".main-container").css('z-index', '0');
      $(".writing").children('iframe').remove();
      $(".headshots_and_photos").css({
        opacity: '1',
        "z-index": '1'
      });
    };
    setTimeout(headshotModal, 800);
  });



  $("#reels").click(function() {
    $(".main-container").css('opacity', '0');

    function reelsModal() {
      history.pushState({doc: 'reels'}, null, "/Paige_Barr_Personal/#/reels");
      $(".main-container").css('z-index', '0');
      $(".writing").children('iframe').remove();
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
    };
    setTimeout(reelsModal, 1000);
  });



                $(".box-commercials").click(function() {
                  $(".main-container").css('opacity', '0');
                  $("html, body").animate({ scrollTop: 0 }, "slow");

                  function commercialsModal() {
                    history.pushState({doc: 'reels-commercials'}, null, "/Paige_Barr_Personal/#/reels/commercials");
                    $(".main-container").css('z-index', '0');
                    $(".writing").children('iframe').remove();
                    $(".reels-commercials").css({
                      opacity: '1',
                      "z-index": '1'
                    });
                  };
                  setTimeout(commercialsModal, 800);
                });


                $(".box-featured").click(function() {
                  $(".main-container").css('opacity', '0');
                  $("html, body").animate({ scrollTop: 0 }, "slow");

                  function featuredModal() {
                    history.pushState({doc: 'reels-featured'}, null, "/Paige_Barr_Personal/#/reels/featured");
                    $(".main-container").css('z-index', '0');
                    $(".writing").children('iframe').remove();
                    $(".reels-featured").css({
                      opacity: '1',
                      "z-index": '1'
                    });
                  };
                  setTimeout(featuredModal, 800);
                });



                $(".box-legit").click(function() {
                  $(".main-container").css('opacity', '0');
                  $("html, body").animate({ scrollTop: 0 }, "slow");

                  function legitModal() {
                    history.pushState({doc: 'reels-legit'}, null, "/Paige_Barr_Personal/#/reels/legit");
                    $(".main-container").css('z-index', '0');
                    $(".writing").children('iframe').remove();
                    $(".reels-legit").css({
                      opacity: '1',
                      "z-index": '1'
                    });
                  };
                  setTimeout(legitModal, 800);
                });



                $(".box-voiceover").click(function() {
                  $(".main-container").css('opacity', '0');
                  $("html, body").animate({ scrollTop: 0 }, "slow");

                  function voiceModal() {
                    history.pushState({doc: 'reels-voiceover'}, null, "/Paige_Barr_Personal/#/reels/voiceover");
                    $(".main-container").css('z-index', '0');
                    $(".writing").children('iframe').remove();
                    $(".reels-voiceover").css({
                      opacity: '1',
                      "z-index": '1'
                    });
                  };
                  setTimeout(voiceModal, 800);
                });

                // I'm choosing to append these videos now because the page cannot
                // handle all 19 videos that are requested by my client on the initial
                // load of the page
                $(".box-writing").click(function() {
                  $(".main-container").css('opacity', '0');
                  $("html, body").animate({ scrollTop: 0 }, "slow");

                  function writingModal() {
                    history.pushState({doc: 'reels-writing'}, null, "/Paige_Barr_Personal/#/reels/writing");
                    $(".main-container").css('z-index', '0');
                    $(".reels-writing").css({
                      opacity: '1',
                      "z-index": '1'
                    });
                    $(".writing").append(
                      '<iframe width="32%" height="255" src="https://www.youtube.com/embed/TNRg9xHf_Qg" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/dh1Xi7hmXUA" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/f81_ulKRvKI" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/m2edqMLUSfU" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/aZS1yjbAZNo" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/AOy8NcpThL4" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/IV00A2j0ydo" frameborder="0" allowfullscreen></iframe><iframe width="32%" height="255" src="https://www.youtube.com/embed/yays9dsciOE" frameborder="0" allowfullscreen></iframe>');
                  };
                  setTimeout(writingModal, 800);
                });


  // like above, these links direct to different pages in the application and act like
  // our main page redirects.

  $(".news-reel").click(function() {
    $(".main-container").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function reelsModal() {
      history.pushState({doc: 'reels-featured'}, null, "/Paige_Barr_Personal/#/reels/featured");
      $(".main-container").css('z-index', '0');
      $(".writing").children('iframe').remove();
      $(".reels-featured").css({
        opacity: '1',
        "z-index": '1'
      });
    };
    setTimeout(reelsModal, 1000);
  });



  $(".news-legit").click(function() {
    $(".main-container").css('opacity', '0');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    function reelsModal() {
      history.pushState({doc: 'reels-legit'}, null, "/Paige_Barr_Personal/#/reels/legit");
      $(".main-container").css('z-index', '0');
      $(".writing").children('iframe').remove();
      $(".reels-legit").css({
        opacity: '1',
        "z-index": '1'
      });
    };
    setTimeout(reelsModal, 1000);
  });



  // very simply, on click on these icons, the page opens a new tab to the
  // corresponding social media page or user's default email.
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

});
