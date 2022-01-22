  // nav color change upon color-on-scroll
  $(document).ready(function () {

      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css("background", "rgba(21, 2, 29, 0.993)");
        } else {
          $(".navbar").css("background", "rgba(35, 4, 36, 0.164)");
        }
      })
    }) <

    //offcanvas
    (function () {
      'use strict'

      document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
      })
    })()


  //carousell
  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1800,
    wrap: false
  })


  $(document).ready(function () {
    // jQuery code

    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


  }); // jquery end