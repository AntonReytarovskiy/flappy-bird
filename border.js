var Border = function(collisionFunc,drawScore,heightFirst) {
    if (heightFirst) {
        this.heightFirst = heightFirst;
        this.indent = 120;
        this.heightSecond = 500 - (this.heightFirst + this.indent);
    }
    else this.setRandomHeight();
    this.stepPx = 2;
    this.poleWidth = parseInt($('.game').width()) + 50;
    this.color = Helper.randowColor();
    this.collisionFunc = collisionFunc;
    this.score = 0;
    this.drawScore = drawScore;
}

Border.prototype.setRandomHeight = function() {
    this.heightFirst = Helper.randomInt(50,310);
    this.indent = 120;
    this.heightSecond = 500 - (this.heightFirst + this.indent);
}

Border.prototype.draw = function() {
    var borders = document.createElement('div');
    $(borders).addClass('borders');
    
    var borderFirst = document.createElement('div');
    $(borderFirst).addClass('border-top');
    $(borderFirst).addClass('border');
    $(borderFirst).css({
        height: this.heightFirst,
        backgroundColor: this.color,
    });
    $(borders).append(borderFirst);
    
    var borderSecond = document.createElement('div');
    $(borderSecond).addClass('border-bottom');
    $(borderSecond).addClass('border');
    $(borderSecond).css({
        height: this.heightSecond,
        marginTop: this.indent,
        backgroundColor: this.color,
    });
    $(borders).append(borderSecond);
    this.borders = borders;
    $('.game').append(borders);
}

Border.prototype.move = function() {
    if (!this.borders)
        return;
    
    $(this.borders).css({
        marginRight: '+=' + this.stepPx + 'px',
    });
    this.chackCollision();
    this.remove();
}

Border.prototype.remove = function() {
    var currentMargin = parseInt($(this.borders).css('marginRight'));
    if (currentMargin >= this.poleWidth) {
        $(this.borders).remove();
        this.setRandomHeight();
        this.color = Helper.randowColor();
        this.draw();
        this.score++;
        this.drawScore(this.score);
    }
}

Border.prototype.chackCollision = function() {
    var bird = {
        x: $('.bird').offset().left,
        y: $('.bird').offset().top,
        width: $('.bird').width(),
        height: $('.bird').height()
    };
    
    var borderTop = {
        x: $('.border-top').offset().left,
        y: $('.border-top').offset().top,
        width: $('.border-top').width() - 10,
        height: $('.border-top').height() - 10
    };
    
    var borderBottom = {
        x: $('.border-bottom').offset().left,
        y: $('.border-bottom').offset().top,
        width: $('.border-bottom').width() - 10,
        height: $('.border-bottom').height() - 10
    };
    
    if (Helper.MacroCollision(bird,borderTop))
        this.collisionFunc();
    else if (Helper.MacroCollision(bird,borderBottom))
        this.collisionFunc();
}