
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});


  var typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
	loop: true,
	typeSpeed: 100,
    backSpeed: 50,
	backDelay: 1500,
  });


    $(".counter").each(function () {
    $(this).appear(function () {
        $(this).countTo({
			speed: 1800,
		});
    });
    });
    
    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({ width: "100%" }, 1000, "linear");
        });
        });
    // Lógica que se ejecutará cuando el elemento aparezca en la vista barra 
        
    //POPUP
    $('.popup-img-gallery').each(function() {
        $(this).magnificPopup({
            delegate: '.popup-img:visible',
            type: "image",
            tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
            closeOnContentClick: !0,
            mainClass: "mfp-fade",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
        });
        });

    $('.popup-ajax-gallery').each(function() {
        $(this).magnificPopup({
        delegate: '.popup-ajax:visible',
        type: 'ajax',
        tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        midClick: true,
        closeBtnInside: true,
        mainClass: "mfp-fade",
        gallery: {
        enabled: true,  
        },
        callbacks: {
            ajaxContentAdded: function() {
                $(".owl-carousel").each(function (index) {
                  var a = $(this);
                  if ($("html").attr("dir") == 'rtl') {
            var rtlVal = true
        }else{
            var rtlVal = false
        }
        $(this).owlCarousel({
            rtl: rtlVal,
                    autoplay: a.data('autoplay'),
                    center: a.data('center'),
                    autoplayTimeout: a.data('autoplaytimeout'),
                    autoplayHoverPause: a.data('autoplayhoverpause'),
                    loop: a.data('loop'),
                    speed: a.data('speed'),
                    nav: a.data('nav'),
                    dots: a.data('dots'),
                    autoHeight: a.data('autoheight'),
                    autoWidth: a.data('autowidth'),
                    margin: a.data('margin'),
                    stagePadding: a.data('stagepadding'),
                    slideBy: a.data('slideby'),
                    lazyLoad: a.data('lazyload'),
                    navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                    animateOut: a.data('animateOut'),
                    animateIn: a.data('animateIn'),
                    video: a.data('video'),
                    items: a.data('items'),
                    responsive:{
                        0:{items: a.data('items-xs'),},
                        576:{items: a.data('items-sm'),},
                        768:{items: a.data('items-md'),},
                        992:{items: a.data('items-lg'),}
                    }	
                    });
                });
             }
        }
    
        })
    })
    
    //isotope
    $(window).on('load', function () {
        $(".portfolio-filter").each(function() {
            var e = $(this);
            e.imagesLoaded(function () {
            if ($("html").attr("dir") == 'rtl') {
                var rtlVal = false
            }else{
                var rtlVal = true;
            }
            var $grid = e.isotope({
                    layoutMode: "masonry",
                    originLeft: rtlVal
                });
            $(".portfolio-menu").find("a").on("click", function() {
                var filterValue = $(this).attr("data-filter");
                return $(".portfolio-menu").find("a").removeClass("active"), $(this).addClass("active"), 
                $grid.isotope({
                  filter: filterValue
                }), !1
            });
            });
            });
    });
