/* main.js file */

$(document).ready(function(){

   // add smooth scroll to navbar and footer link
  $(".navbar a, footer a[href='#home'], a[href='#ourmenu']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){ 
        window.location.hash = hash;
      });
    } 
  });
  
  // add slide class when scroll and make animation
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

})