var Border = function(heightFirst) {
    if (heightFirst) {
        this.heightFirst = heightFirst;
        this.indent = 120;
        this.heightSecond = 500 - (this.heightFirst + this.indent);
    }
    else this.setRandomHeight();
    this.stepPx = 2;
    this.poleWidth = parseInt($('.game').width()) + 50;
    this.color = Helper.randowColor();
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
    this.remove();
}

Border.prototype.remove = function() {
    var currentMargin = parseInt($(this.borders).css('marginRight'));
    if (currentMargin >= this.poleWidth) {
        $(this.borders).remove();
        this.setRandomHeight();
        this.color = Helper.randowColor();
        this.draw();
    }
}