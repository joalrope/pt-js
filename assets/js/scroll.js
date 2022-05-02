$(function () {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('main').on('scroll', function (e) {
    const scroll = $('main').scrollTop();

    if (scroll >= 70) {
      $('.navbar').addClass('bg-primary');
      $('.nav-link').addClass('text-white');
    } else {
      $('.navbar').removeClass('bg-primary');
      if (window.innerWidth > 576) {
        $('.nav-link').removeClass('text-white');
      }
    }
  });

  $(window).resize(function () {
    if (window.innerWidth < 576) {
      $('.nav-pills').addClass('bg-primary');
      $('.nav-link').addClass('text-white');
    } else {
      $('.nav-pills').removeClass('bg-primary');
    }
  });
});
