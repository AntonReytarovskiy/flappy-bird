var Bird = function(gameOver) {
    $(window).keyup(this.keyup.bind(this));
    this.isPress = false;
    this.gameOver = gameOver;
    this.up = true;
}

Bird.prototype.start = function() {
    $(window).keydown(this.keydown.bind(this));
    this.bird = $('.bird');
    $(this.bird).offset({top: 100});
    this.downInterval = setInterval(this.down.bind(this),7);
}

Bird.prototype.down = function() {
    if (!this.isPress) {
        $(this.bird).css({
            transform: 'rotate(+20deg)',
            marginTop: '+=2px',
        });
        if ($('.bird').offset().top > $('.game').height() - 30)
            this.gameOver();
    }
}

Bird.prototype.keydown = function(event) {
    if (event.keyCode == Helper.KEY_CODE.UP && $(this.bird).offset().top > 50 && this.up) {
        this.isPress = true;
        $(this.bird).css({
            transform: 'rotate(-20deg)',
        });
        if ($(this.bird).offset().top > 0)
        $(this.bird).animate({
            marginTop: '-=55px',
        },200,function() {
            this.isPress = false;
        }.bind(this));
        this.up = false;
    }
}

Bird.prototype.keyup = function() {
    this.up = true;
}

Bird.prototype.stop = function() {
    clearInterval(this.downInterval);
    $(window).unbind('keydown');
}