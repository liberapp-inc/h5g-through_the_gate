var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ColorPallet;
(function (ColorPallet) {
    //Drop配色
    /*    WHITE = 0xffffff,
        BLUE = 0x2060ff,
        RED = 0x00f8ff,
        GOLD = 0x379bfa,*/
    //サーカス配色
    /*    WHITE = 0xffffff,
        BLUE = 0xc0001b,//0x0d697e,
        RED = 0x0d697e,//0xc0001b,
        GOLD = 0xe0b060,*/
    //ブログ配色
    ColorPallet[ColorPallet["WHITE"] = 16777215] = "WHITE";
    ColorPallet[ColorPallet["BLUE"] = 8437150] = "BLUE";
    ColorPallet[ColorPallet["RED"] = 15821679] = "RED";
    ColorPallet[ColorPallet["GOLD"] = 15821679] = "GOLD";
})(ColorPallet || (ColorPallet = {}));
var PIXEL_PER_METER = 1;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Main.prototype.addToStage = function () {
        Util.init(this);
        CheckDate.init();
        SaveData.init();
        GameObject.init(this.stage);
        PhysicsObject.prepare(PIXEL_PER_METER);
        Camera2D.initial();
        Game.init();
        egret.startTick(this.tickLoop, this);
    };
    Main.prototype.tickLoop = function (timeStamp) {
        PhysicsObject.step(timeStamp);
        GameObject.update();
        return false;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var Game = (function () {
    function Game() {
    }
    Game.init = function () {
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
        GameOver.gameOverFlag = false;
        /* new メソッドを記入*/
        new Background();
        new GameStage();
        new UILayer();
        new Ground(0, Game.height - 200, Game.width, 0, 4, ColorPallet.BLUE);
        new Player(Game.width / 2, Game.height - 250, Game.width * 0.1);
        new Score(0, 0, 0, 0, ColorPallet.GOLD);
        new Description(0, 0, 0, 0, ColorPallet.GOLD);
        //new TimeLimit(Game.width/2,0,0,0, ColorPallet.RED);
        new CreateGameScene();
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Main.js.map