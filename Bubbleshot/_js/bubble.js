var BubbleShoot = window.BubbleShoot || {} ;
BubbleShoot.Bubble = function(row, col, type, sprite){
    var that = this;
    this.getType = function() { return type;};
    this.getSprite = function() { return sprite;};
    this.getCol = function() { return col;};
    this.getRow = function() { return row;};
}; 

BubbleShoot.Bubble.create = function(rowNum, colNum, type){
    if(type === undefined) {
        type = Math.floor(Math.random() * 4);
    };
    var sprite = $(document.createElement("div"));
    sprite.addClass("bubble");
    sprite.addClass("bubble_" + type);
    var bubble = new BubbleShoot.Bubble(rowNum, colNum, type, sprite);
    return bubble;
    };