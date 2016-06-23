var Helper = function() {
}

Helper.randomInt = function(min,max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}

Helper.randowColor = function() {
    switch(Helper.randomInt(1,10)) {
        case 1: return 'red';
        case 2: return 'green';
        case 3: return 'brown';
        case 4: return 'black';
        case 5: return 'blue';
        case 6: return 'orange';
        case 7: return 'aqua';
        case 8: return 'firebrick';
        case 9: return 'coral';
        case 10: return 'yellow';
    }
}

Helper.KEY_CODE = {
    UP: 38,
};