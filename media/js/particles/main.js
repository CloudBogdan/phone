const 
    cvs = document.querySelector("#particles_canvas"),
    ctx = cvs.getContext("2d");

const scrn = {
    width: $(".footer .bg").width() + 100,
    height: $(".footer .bg").height()
};
cvs.width = scrn.width;
cvs.height = scrn.height;
cvs.style.left = "-250px";

loop();
function loop() {
    requestAnimationFrame(loop);
    
    if (typeof update == "function")
        update();
    if (typeof render == "function") {
        ctx.clearRect(0, 0, scrn.width, scrn.height);
        render();
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}
function round(obj) {
    return Math.round(obj);
}