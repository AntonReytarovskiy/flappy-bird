var Bird = function() {
    $(window).keydown(this.keydown.bind(this));
    this.isPress = false;
}

Bird.prototype.start = function() {
    this.bird = $('.bird');
    setInterval(this.down.bind(this),10);
}

Bird.prototype.down = function() {
    if (!this.isPress) {
        $(this.bird).css({
            marginTop: '+=2px',
        });
    }
    console.log(this.isPress);
}

Bird.prototype.keydown = function(event) {
    if (event.keyCode == Helper.KEY_CODE.UP) {
        this.isPress = true;
        $(this.bird).animate({
            marginTop: '-=50px',
        },200,function() {
            this.isPress = false;
        }.bind(this));
    }
}