


(function ($) {
	"use strict";


$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});

// Header Sticky
$(window).on('scroll',function() {
	var stickytop = $('#header.sticky-top .bg-transparent');
	var stickytopslide = $('#header.sticky-top-slide');
	
	if ($(this).scrollTop() > 1){  
		stickytop.addClass("sticky-on-top");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('sticky-logo'));
	}
	else {
		stickytop.removeClass("sticky-on-top");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('default-logo'));
	}
	
	if ($(this).scrollTop() > 180){  
		stickytopslide.find(".primary-menu").addClass("sticky-on");
		stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('sticky-logo'));
	}
	else{
		stickytopslide.find(".primary-menu").removeClass("sticky-on");
		stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('default-logo'));
	}
});

// Sections Scroll
if($("body").hasClass("side-header")){
$('.smooth-scroll').on('click', function() {
	event.preventDefault();
    var sectionTo = $(this).attr('href');
	$('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
});
   }else {
$('.smooth-scroll').on('click', function() {
	event.preventDefault();
    var sectionTo = $(this).attr('href');
	$('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top - 50}, 1500, 'easeInOutExpo');
});
}
//Toggle Button
$('.switch').on('click', function() {
    this.classList.toggle('active');

})

//Typed
  var typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
	loop: true,
	typeSpeed: 100,
    backSpeed: 50,
	backDelay: 1500,
  });


  // Mobile Menu
$('.navbar-toggler').on('click', function() {
	$(this).toggleClass('show');
});
$(".navbar-nav a").on('click', function() {
    $(".navbar-collapse, .navbar-toggler").removeClass("show");
});

// Overlay Menu & Side Open Menu
$('.navbar-side-open .collapse, .navbar-overlay .collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
    e.preventDefault();
}),
$('.navbar-side-open [data-bs-toggle="collapse"], .navbar-overlay [data-bs-toggle="collapse"]').on('click', function(e) {
   e.preventDefault();
   $($(this).data('bs-target')).toggleClass('show');
})


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
     
    
    /*---------------------------------
   Carousel (Owl Carousel)
----------------------------------- */
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
		animateOut: a.data('animateout'),
		animateIn: a.data('animatein'),
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
    
    //isotope sirve para filtrar las images, y ImagesLoaded para que sea responsive
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


/*------------------------
   Scroll to top
-------------------------- */
$(function () {
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 400) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

var form = $('#contact-form'); // contact form

form.on('submit', async function (e) {
	e.preventDefault(); // prevent default form submit

	const form = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}})
		if (response.ok) {
			Swal.fire({
                title: "Gracias ;)!!",
                width: 600,
                padding: "3em",
                color: "#20c997",
                background: "#fff url(../img/cat-3.jpg)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("../img/grey.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                if (result.isConfirmed) {
                    this.reset()
                }
              })
		} else {
			Swal.fire({
                title: "Algo salio mál, intentalo otra vez por favor :(",
                width: 600,
                padding: "3em",
                color: "#20c997",
                background: "#fff url(../img/cat-5.jpeg)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("../img/agumon.gif")
                  left top
                  no-repeat
                `
              });
		}

});

})(jQuery)