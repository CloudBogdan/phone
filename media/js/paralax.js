$(()=> {

    const waves = $(".wave");

    $(window).on("scroll", ()=> {

        waves.each(wave=> {

            waves.eq(wave).css({
                top: `${ 50 - ($(".sec2").offset().top - $(window).scrollTop()) / 15 }%`
            });
            
        });

    });

    $(".phones").draggable({
        drag(ev, ui) {
            $(".phones").css({
                transform: "translate(0, 0) scale(1.1)"
            })
        },
        stop(ev, ui) {
            $(".phones").css({
                transform: `translate(0, 0) scale(1) rotate(${ Math.random() * (5 + 5) - 5 }deg)`,
            })
        }
    });

});