$(document).ready(function() {
    var obj = new Border();
    obj.draw();
    var bird = new Bird();
    bird.start();
    setInterval(function() {
        obj.move();
    },10);
});