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
    // Lógica que se ejecutará cuando el elemento aparezca en la vista
        

