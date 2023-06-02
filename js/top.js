function tweenMaxTextAnimation() {
  var $startAnim = $("#start-anim");
  var $exitAnim = $("#exit-anim");
  var $demoText = $("#gsap-anim-text-1");
  var $postTitleText = $("#post-title-text");
  
  $demoText.html ( $demoText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
  $postTitleText.html( $postTitleText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
  $startAnim.ready(startAnimation);
  $startAnim.on("click", startAnimation);
  $exitAnim.on("click", startAnimation2);

  function startAnimation(){
    TweenLite.set($startAnim, {autoAlpha:0});
    TweenMax.staggerFromTo( $demoText.find("span"), 0.09, {autoAlpha:0, scale:2}, {autoAlpha:1, scale:1}, 0.01, reset );
    TweenMax.staggerFromTo( $postTitleText.find("span"), 0.4, {autoAlpha:0, rotationX:-90, top:"-30px"}, {autoAlpha:1, rotationX:0, top:"0px"}, 0.1, reset );
  }
  function startAnimation2(){
    TweenLite.set($startAnim, {autoAlpha:0});
    TweenMax.staggerFromTo( $demoText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.01, reset2);
    TweenMax.staggerFromTo( $postTitleText.find("span"), 0.4, {autoAlpha:1, rotationX:0, top:"0px"}, {autoAlpha:0, rotationX:-90, top:"-30px"}, 0.1, reset2 );
  }
  function reset(){
    TweenMax.to($startAnim, 1, {autoAlpha:1});
  }
  function reset2(){
    TweenMax.to($demoText, 1, {autoAlpha:0});
    TweenMax.to($postTitleText, 1, {autoAlpha:0});
  }
}

function scrollMagic() {
  var controller = new ScrollMagic.Controller();
  var tween = TweenMax.to(".img-animation", 1, {
    rotation: 360,
    ease: Linear.easeNone
  });
  var scene = new ScrollMagic.Scene({
    // offset:50,
    duration: 200
  })
  .setTween(tween)
  .setPin(".img-animation", {pushFollowers: true})
  // .addIndicators(true)
  .addTo(controller);
  scene.triggerElement("#trigger");
}

function animationIcon() {
  var scrollMagicController = new ScrollMagic();
  
  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.fromTo('#animation', 0.75,
		{
			backgroundColor: 'rgb(255, 39, 46)',
			scale: 5,
    	 left: -400
  	},{
			scale: 1,
    	 left: 400,
	     rotation: 360,
	     repeat: -1, /* Aka infinite amount of repeats */
    	 yoyo: true /* Make it go back and forth */
		}
	);
  
  // Create the Scene and trigger when visible
  var scene2 = new ScrollScene({
  // var scene2 = new ScrollMagic.Scene({
    triggerElement: '#sec04',
    duration: 300
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  scene2.addIndicators();
}

var hoverMouse = function ($el) {
  $el.each(function () {
    var $self = $(this);
    var hover = false;
    var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
    var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

    var attachEventsListener = function () {
      $(window).on("mousemove", function (e) {
        //
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

        // cursor
        var cursor = {
          x: e.clientX,
          y: e.pageY
        };

        // size
        var width = $self.outerWidth();
        var height = $self.outerHeight();

        // position
        var offset = $self.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        };

        // comparaison
        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        // dist
        var dist = Math.sqrt(x * x + y * y);

        // mutex hover
        var mutHover = false;

        // anim
        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }

        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    var onHover = function (x, y) {
      TweenMax.to($self, 0.4, {
        x: x * 0.8,
        y: y * 0.8,
        //scale: .9,
        rotation: x * 0.05,
        ease: Power2.easeOut
      });
    };
    
    var onLeave = function () {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4)
      });
    };

    attachEventsListener();
  });
};

(function ($) {
  // scrollMagic()
  hoverMouse($("a"))
  tweenMaxTextAnimation()
  animationIcon()

  // $(window).scroll(function(){
  //   var offsetTop =  $('#sec02').offset().top;
  //   if($(window).scrollTop() > offsetTop){

  //   }
  // });
}(jQuery));
