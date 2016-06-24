var intervalId;
var bird = new Bird(gameOver);
var border = new Border(gameOver,drawScore);
var highScore = 0;
$(document).ready(function() {
    var border = new Border(gameOver,drawScore);
    //$('.restart').bind('click',restart);
    border.draw();
    bird.start();
    intervalId = setInterval(function() {
        border.move();
    },10);
});

//function restart() {
//    border.remove();
//    $('.gameover-box').hide(200);
//    bird.start();
//    intervalId = setInterval(function() {
//        border.move();
//    },10);
//    bird.start();
//}

function gameOver() {
    clearInterval(intervalId);
    bird.stop();
//    $('.gameover-box').show(300);
}

function drawScore(score) {
    $('.score-count').html(score);
    if (score > highScore) {
        highScore = score;
        $('.score-high').html(highScore);
    }
}