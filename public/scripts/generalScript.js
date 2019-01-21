$(function () {
  $(document).scroll(function () {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var  os = $('.top-section').offset().top; // pixels to the top of div1
    var  ht = $('.top-section').height(); // height of div1 in pixel
    var sum = os +ht;
    console.log(scroll + " >" + sum);
    if(scroll > os + ht){
        $("#generalNavbar").addClass('bg-light navbar-light');
        $("#generalNavbar").removeClass('navbar-dark');
    }else{
        $("#generalNavbar").removeClass('bg-light navbar-light');
        $("#generalNavbar").addClass('navbar-dark');
    }
  });
});


