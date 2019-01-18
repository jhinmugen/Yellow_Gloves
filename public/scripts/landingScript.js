$(function () {
  $(document).scroll(function () {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('.carousel-style').offset().top; // pixels to the top of div1
    var ht = $('.carousel-style').height(); // height of div1 in pixels
    if(scroll > os + ht){
        $(".navbar").addClass('bg-light navbar-light');
        $(".navbar").removeClass('navbar-dark');
    }else{
        $(".navbar").removeClass('bg-light navbar-light');
        $(".navbar").addClass('navbar-dark');
    }
  });
});


