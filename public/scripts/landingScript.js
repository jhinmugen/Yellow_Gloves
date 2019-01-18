$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $carousel = $(".carousel-style")
    $nav.toggleClass('bg-light', $(this).scrollTop() > $carousel.height());
  });
});


