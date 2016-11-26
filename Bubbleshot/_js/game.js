var BubbleShoot = window.BubbleShoot || {};
var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = function () {
    var curBubble;
    var board;
    this.init = function(){
        $(".but_start_game").bind("click",startGame);
    };

    var clickGameScreen = function(e){
        console.log('udało się!');
        var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
        var duration = 750;
        var distance = 1000;
        var collision = BubbleShoot.CollisionDetector.findIntersection(curBubble, board, angle);
        if(collision)
        {
            var coords = collision.coords;
            duration = Math.round(duration * collision.distToCollision / distance);
        }
        else
        {
            var distX = Math.sin(angle) * distance;
            var distY = Math.cos(angle) * distance;
            var bubbleCoords= BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
            var coords = {
                x: bubbleCoords.left + distX,
                y: bubbleCoords.top - distY
            };
        }
        BubbleShoot.ui.fireBubble(curBubble,coords,duration);
    };

    var getNextBubble = function (){
        var bubble = BubbleShoot.Bubble.create();
        bubble.getSprite().addClass("cur_bubble");
        $("#board").append(bubble.getSprite());
        return bubble;
    };

    var startGame = function() {
        $(".but_start_game").unbind("click");
        BubbleShoot.ui.hideDialog();
        curBubble = getNextBubble();
        board = new BubbleShoot.Board();
        BubbleShoot.ui.drawBoard(board);
        $("#board").bind("click", clickGameScreen);
    };
};
