$(document).ready(function () {
  // gnb on/off
  var posY;
  var scrollControl_Start = function () {
    posY = $(window).scrollTop();
    $('body').addClass('gnbscroll');
    $('.wrap').css({ top: -posY });
  };
  var scrollControl_End = function () {
    $('body').removeClass('gnbscroll');
    $('.wrap').css({ top: 'auto' });
    $(window).scrollTop(posY);
  };
  $('.header_menu a').click(function () {
    $('.nav').addClass('active');
    $('.nav_bg').fadeIn();
    scrollControl_Start();
  });
  $('.nav_close a').click(function () {
    $('.nav').removeClass('active');
    $('.nav_bg').fadeOut();
    scrollControl_End();
  });
  $('.nav .nav_bg').click(function () {
    $('.nav').removeClass('active');
    $('.nav_bg').fadeOut();
    $(this).hide();
    scrollControl_End();
  });

  // drop
  $('.btn_drop .ic_drop').click(function () {
    $('.drop_wrap').slideToggle();
    $(this).toggleClass('on');
    $('.cont_wrap_scroll').toggleClass('active');
  });

  // TopBtn
  var offset = 80;
  var duration = 300;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.btn_top').fadeIn(duration);
    } else {
      $('.btn_top').fadeOut(duration);
    }
  });
  $('.btn_top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
  // Gnb
  $('.two_menu')
    .unbind()
    .click(function () {
      var next = $(this).next('.nav_sub_list');
      var clear = $(this).parent().toggleClass('active');
      next.slideToggle();
      $('.nav_menu_list li').not(clear).removeClass('active');
      $('.nav_menu_list li .nav_sub_list').not(next).slideUp();
    });
});
