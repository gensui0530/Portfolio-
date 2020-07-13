$(function() {
  //フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass(
      'float-active',
      $(this).scrollTop() > targetHeight
    );
  });

  //SPメニュー
  $('.js-toggle-sp-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });

  $('.menu-link').on('click', function() {
    $('.js-toggle-sp-menu').removeClass('active');
    $('.js-toggle-sp-menu-target').removeClass('active');
  });

  //フェードイン
  $(window).scroll(function() {
    $('.container-body_prof').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.container-detail').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.pie-1').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.pie-2').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.pie-3').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.panel-detail').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-web').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-img1').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-obj').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-img2').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-wp').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-img3').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-fw').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.product-img4').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  $(window).scroll(function() {
    $('.form').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  //モーダル

  $('.js-show-modal1').on('click', function() {
    var modalWidth = $('.js-show-modal-target1').width();
    var windowWidth = $(window).width();
    $('.js-show-modal-target1').attr(
      'style',
      'margin-left:' + (windowWidth / 2 - modalWidth / 2) + 'px'
    );
    $('.js-show-modal-target1').show();
    $('.js-show-modal-cover1').show();
  });
  $('.js-hide-modal1').on('click', function() {
    $('.js-show-modal-target1').hide();
    $('.js-show-modal-cover1').hide();
  });

  $('.js-show-modal2').on('click', function() {
    var modalWidth = $('.js-show-modal-target2').width();
    var windowWidth = $(window).width();
    $('.js-show-modal-target2').attr(
      'style',
      'margin-left:' + (windowWidth / 2 - modalWidth / 2) + 'px'
    );
    $('.js-show-modal-target2').show();
    $('.js-show-modal-cover2').show();
  });
  $('.js-hide-modal2').on('click', function() {
    $('.js-show-modal-target2').hide();
    $('.js-show-modal-cover2').hide();
  });

  $('.js-show-modal3').on('click', function() {
    var modalWidth = $('.js-show-modal-target3').width();
    var windowWidth = $(window).width();
    $('.js-show-modal-target3').attr(
      'style',
      'margin-left:' + (windowWidth / 2 - modalWidth / 2) + 'px'
    );
    $('.js-show-modal-target3').show();
    $('.js-show-modal-cover3').show();
  });
  $('.js-hide-modal3').on('click', function() {
    $('.js-show-modal-target3').hide();
    $('.js-show-modal-cover3').hide();
  });

  $('.js-show-modal4').on('click', function() {
    var modalWidth = $('.js-show-modal-target4').width();
    var windowWidth = $(window).width();
    $('.js-show-modal-target4').attr(
      'style',
      'margin-left:' + (windowWidth / 2 - modalWidth / 2) + 'px'
    );
    $('.js-show-modal-target4').show();
    $('.js-show-modal-cover4').show();
  });
  $('.js-hide-modal4').on('click', function() {
    $('.js-show-modal-target4').hide();
    $('.js-show-modal-cover4').hide();
  });
});
