//Toggle Icone Hamburger
$(document).ready( function(){
  $('.hamburger').click( function() {
    $(this).toggleClass('is-active')
  })

  //greensock Animation
  var timeline = new TimelineMax();

  timeline.to(".menu", 1.5, {left: '0%',ease: Expo.easeInOut, delay: -1.5});
  timeline.staggerFrom(".menu ul li", 0.4, {x: -100, opacity:0}, 0.1);

  timeline.reverse();

  $(document).on('click', '.hamburger', function(){
    timeline.play();
  })

  $(document).on('click', 'a', function(e){
    e.preventDefault();
    timeline.reverse();
  })

})


