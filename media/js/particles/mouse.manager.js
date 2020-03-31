class Mouse {
    constructor() {
        this.x = 0;
        this.y = 0;

        window.onmousemove = ev=> {
            this.x = ev.clientX;
            this.y = ev.clientY;
        };
    }
    isRange(obj, radius) {
        return Math.sqrt(Math.pow(obj.x - this.x, 2) + Math.pow(obj.y - this.y, 2)) < radius;
    } 

}