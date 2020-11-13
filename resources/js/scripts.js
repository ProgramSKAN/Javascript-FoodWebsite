$(document).ready(function(){
    // $('h1').click(function(){
    //     $(this).css('background-color','#ff0000');
    // })

    // ----------STICKY NAVIGATION---------------
    $('.js-section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{offset:'60px'})
   
    //---------------SCROLL ON BUTTONS---------------------
    $('.js-scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop:$('.js-section-plans').offset().top},1000)
    })
    $('.js-scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js-section-features').offset().top},1000)
    })


    // ------------NAVIGATION SCROLL------------------
    //for this keep name in href of a tag of nav li's and keep the same name as id in the section to be scrolled
    //https://css-tricks.com/snippets/jquery/smooth-scrolling/

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  //--------------ANIMATIONS ON SCROLL--------------------------
  $('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated fadeIn');
  })

  //--------------MOBILE NAV------------------
  $('.js-nav-icon').click(function(){
      var nav=$('.js-main-nav');
      var icon=$('mobile-nav-icon')
      nav.slideToggle(200);

    })
})