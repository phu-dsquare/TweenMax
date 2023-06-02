var common = {
  hamburgerMenu: function() {
    $('.hamburger').click(function() {
      if ($("body").hasClass("nav--open")) {
        closeMenu($(this))
      } else {
        openMenu($(this))
      }
    });
    $(".menu-toggle a, .hamburger--close").click(function () {
      closeMenu()
    });
    function closeMenu(element){
      $("body").addClass("nav--close").removeClass("nav--open");
      $(".menu-toggle").fadeOut(150);
      $(element).removeClass("is-active");
    }
    function openMenu(element){
      $("body").addClass("nav--open").removeClass("nav--close");
      $(".menu-toggle").fadeIn(150);
      $(element).addClass("is-active");
    }
  },
  modal: function() {
    $('.modal__close').click(function() {
      $('body').removeClass('modal--open');
      $('.modal').removeClass('modal--active');
    })
  },
  anchorLink: function() {
    $('a[href^="#"]').not('[href="#"]').not('[href*="#tab"]').not('[href*="#modal"]').click(function(e) {
      var id = $(this).attr('href')
      if (id.split('')[0] === '#' && id != '#') {
        // event.preventDefault();
        var offsetTop = 0
        if ($('.header').length > 0 && $(window).width() >= 1024) {
          offsetTop =  $('.header').height()
        }
        $('body, html').animate({
          scrollTop: $(id).offset().top - offsetTop
        }, 400)
      }
    })
    //anchor link different page
    var urlHash = window.location.href.split("#")[1];
    if (urlHash &&  $('#' + urlHash).length) {
      // $('.main').css({ 'opacity': 0 });
      setTimeout(function(){
        // $('.main').css({ 'opacity': '' });
        $(window).scrollTop($('#' + urlHash).offset().top)
      }, 400)
    }
  },
  init: function() {
    this.hamburgerMenu();
    this.modal();
    this.anchorLink();
  }
};

common.init();
