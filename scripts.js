$(function(){

// titleDisappear is the function used to animate the title
// screen. It waits to activate the fade-out, and
// then makes sure the z-index is changed so you can click on the
// main site
function titleDisappear() {
  $(".title-screen").css('opacity', '0');
  $(".initial").css('opacity', '1');
  $(".title-screen").css('z-index', '-1');
};
setTimeout(titleDisappear, 3000);


// when you click on the news-below, it will scroll to that position
$('#scroll-down').click(function() {
  $('html, body').animate({ scrollTop: 1000 }, "slow");
});

$('#writing').click(function() {
  window.location.href = "writing.html";
});

// very simply, on click on these icons, the page opens a new tab to the
// corresponding social media page or user's default email.
$("#email").click(function(){
  window.open("mailto:paigephone123@gmail.com?subject=After visiting your website...", "_blank");
});

$("#twitter").click(function(){
  window.open("https://twitter.com/paigesfunny", "_blank");
});

$("#facebook").click(function(){
  window.open("https://www.facebook.com/paige.barr.5", "_blank");
});

$("#youtube").click(function() {
  window.open("https://www.youtube.com/user/paigemcp", "_blank");
});

$("#vimeo").click(function() {
  window.open("https://vimeo.com/user9917256", "_blank");
});


});
