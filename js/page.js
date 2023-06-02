function animationCard(){
  let filterEl = document.getElementById('turbulence');
  let container1 = document.querySelector('container1');

  tl = new TimelineMax({
    repeat: -1,
    delay: 1,
    // yoyo: true,
    // repeatDelay: 2
  });

  // tl.from('.img', 10, {opacity: 0, x:0, y:-20, ease: Power4.easeOut}, 0)
  tl.to(filterEl, 3, {attr: { baseFrequency: '0.001 0.004' }}, 0)
}


function animationNav() {
  var staggerTL = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 5
  });

  staggerTL
    .staggerFrom(".nav-list-item", 0.5, {
      yPercent: -100,
    }, 0.2)
    .staggerFrom(".nav-list-item:nth-child(1) ul li", 0.5, {x: 20, autoAlpha:0}, 0.2, 2)
    .staggerFrom(".nav-list-item:nth-child(2) ul li", 0.5, {x: 20, autoAlpha:0}, 0.2, 2)
    .staggerFrom(".nav-list-item:nth-child(3) ul li", 0.5, {x: 20, autoAlpha:0}, 0.2, 2)
    .staggerFrom(".nav-list-item:nth-child(4) ul li", 0.5, {x: 20, autoAlpha:0}, 0.2, 2)
    .staggerFrom(".nav-list-item:nth-child(5) ul li", 0.5, {x: 20, autoAlpha:0}, 0.2, 2)
}


$(function(){
  animationCard()
  animationNav()
})

// (function ($) {
  
// }(jQuery));