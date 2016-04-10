var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
humanContainer.x = 0;
var head = new render.Bitmap();
head.source = "head.png";
head.y -= 160;
head.x -= 30;
var headwidth = 61;
var headheight = 61;
humanContainer.addChild(head);
var rotate = 1;
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png", "trunk.png", "left_arm.png", "right_arm.png", "left_leg.png", "right_leg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
        this.vx = 5;
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += duringTime * rotate * 5; //100;//+= duringTime * this.vx;
        this.y = 170;
        this.rotation += rotate; //+= rotate;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var trunk = new render.Bitmap();
trunk.source = "trunk.png";
trunk.x -= 20;
trunk.y -= 100;
var leftarm = new render.Bitmap();
leftarm.source = "left_arm.png";
leftarm.y -= 210;
leftarm.x -= 240;
var rightarm = new render.Bitmap();
rightarm.source = "right_arm.png";
rightarm.y -= 90;
rightarm.x += 20;
var leftleg = new render.Bitmap();
leftleg.source = "left_leg.png";
leftleg.y += 45;
leftleg.x += 10;
var rightleg = new render.Bitmap();
rightleg.source = "right_leg.png";
rightleg.y += 45;
rightleg.x -= 30;
var legwidth = 18;
var legheight = 198;
humanContainer.addChild(trunk);
humanContainer.addChild(leftarm);
humanContainer.addChild(rightarm);
humanContainer.addChild(leftleg);
humanContainer.addChild(rightleg);
var body = new HumanBody(humanContainer);
ticker.start([body]);
var eventCore = new events.EventCore();
eventCore.init();
var headHitTest = function (localPoint, displayObject) {
    //alert (`点击位置为${localPoint.x},${localPoint.y}`);
    if (localPoint.x <= headwidth && localPoint.x >= 0 && localPoint.y <= headheight && localPoint.y >= 0) {
        return true;
    }
    else {
        return false;
    }
};
var headOnClick = function () {
    //修改 HumanBody 的速度，使其反向移动
    rotate = -rotate;
    if (rotate == 0) {
        rotate = 1;
    }
};
var legHitTest = function (localPoint, displayObject) {
    if (localPoint.y >= 0 && localPoint.y <= legheight && ((localPoint.x >= 0 && localPoint.x <= legwidth))) {
        return true;
    }
    else {
        return false;
    }
};
var legOnClick = function () {
    rotate = 0;
    body.rotation = 0;
};
eventCore.register(head, headHitTest, headOnClick);
eventCore.register(rightleg, legHitTest, legOnClick);
eventCore.register(leftleg, legHitTest, legOnClick);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsSUFBTyxJQUFJLENBK1NWO0FBL1NELFdBQU8sSUFBSSxFQUFDLENBQUM7SUFHVDtRQUdJLGVBQVksQ0FBUyxFQUFFLENBQVM7WUFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FBQyxBQVBELElBT0M7SUFQWSxVQUFLLFFBT2pCLENBQUE7SUFFRCwyQkFBa0MsS0FBWSxFQUFFLENBQVM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUFMZSxzQkFBaUIsb0JBS2hDLENBQUE7SUFHRCxzQkFBNkIsQ0FBUztRQUdsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksRUFBRSxHQUFHLENB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