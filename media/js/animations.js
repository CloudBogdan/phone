const mini_catalog = $(".mini_catalog");
let mouse = {
    down: false,
    old_x: 0
};
let 
    scroll_left = 0,
    old_scroll_left = 0,
    scroll_left_vel = 0;

mini_catalog.on("mousedown", ev=> {
    mouse.down = true;
    mouse.old_x = ev.clientX;
    old_scroll_left = $(".mini_catalog .list").scrollLeft();
});
mini_catalog.on("mouseup", ()=> {
    mouse.down = false;
});
mini_catalog.on("mousemove", ev=> {
    if (mouse.down) {
        
        scroll_left = old_scroll_left + (mouse.old_x - ev.clientX);
        
        $(".mini_catalog .list").scrollLeft(scroll_left);

    }
});

const fade = {
    all: $(".fade"),
    deleter: $(".fade.deleter")
};

$(window).on("scroll", ()=> {
    fade.all.each(i=> {
        let win = $(window).scrollTop() + $(window).height() - 200;

        if (win > fade.all.eq(i).offset().top) {
            
            fade.all.eq(i).css({
                transform: "translate(0, 0)",
                opacity: 1
            });
            $(".fade.romb").eq(i).css({
                transform: "translate(-50%, -50%) rotate(45deg)"
            });

        } else {

            fade.all.eq(i).css({
                transform: "",
                opacity: ""
            });
            $(".fade.romb").eq(i).css({
                transform: ""
            });

        }

        if (
            win - $(window).height() + 100 > fade.deleter.offset().top ||
            win < fade.deleter.offset().top
        ) {
            rendering = false;
        } else {
            rendering = true;
        }

    });
});

const 
    header = $(".header"),
    footer = $(".footer");

$(window).on("scroll", ()=> {

    if ($(window).scrollTop() > footer.offset().top - 100) {
        
        header.css({
            opacity: 0
        });
        
    } else {
        header.css({
            opacity: 1
        });
    }

});

