var intervalId;
var bird = new Bird(gameOver);
var border;
var highScore = 0;
$(document).ready(function() {
    border = new Border(gameOver,drawScore);
    $('.restart').bind('click',restart);
    border.draw();
    bird.start();
    intervalId = setInterval(function() {
        border.move();
    },10);
});

function restart() {
    drawScore(0);
    border.score = 0;
    $('.borders').remove();
    $('.gameover-box').hide(200);
    bird.start();
    border.setRandomHeight();
    border.draw();
    drawScore(0);
    intervalId = setInterval(function() {
        border.move();
    },10);
}

function gameOver() {
    clearInterval(intervalId);
    bird.stop();
    $('.gameover-box').show(300);
}

function drawScore(score) {
    $('.score-count').html(score);
    if (score > highScore) {
        highScore = score;
        $('.score-high').html(highScore);
    }
}