var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
humanContainer.x = 0;
var head = new render.Bitmap();
head.source = "head.jpg";
head.y -= 160;
head.x -= 30;
var headwidth = 61;
var headheight = 61;
humanContainer.addChild(head);
var rotate = 1;
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.jpg", "trunk.jpg", "left_arm.jpg", "right_arm.jpg", "left_leg.jpg", "right_leg.jpg"]);
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
var leftarm = new render.Bitmap();
leftarm.source = "left_arm.jpg";
leftarm.y -= 210;
leftarm.x -= 240;
var rightarm = new render.Bitmap();
rightarm.source = "right_arm.jpg";
rightarm.y -= 90;
rightarm.x += 20;
var leftleg = new render.Bitmap();
leftleg.source = "left_leg.jpg";
leftleg.y += 45;
leftleg.x += 10;
var rightleg = new render.Bitmap();
rightleg.source = "right_leg.jpg";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxJQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3pELElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRzlCLElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBRXREO0lBQXdCLDZCQUFJO0lBQTVCO1FBQXdCLDhCQUFJO1FBR3hCLE9BQUUsR0FBVSxDQUFDLENBQUM7SUFRbEIsQ0FBQztJQUxHLDRCQUFRLEdBQVIsVUFBUyxVQUFrQjtRQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBLDBCQUEwQjtRQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUVqQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBd0IsSUFBSSxHQVczQjtBQUVELElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFHckIsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDdkMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBRWpCLElBQUksV0FBVyxHQUFHLFVBQUMsVUFBcUIsRUFBQyxhQUFrQztJQUN2RSxLQUFLLENBQUUsbUNBQVEsVUFBVSxDQUFDLENBQUMsU0FBSSxVQUFVLENBQUMsQ0FBRyxDQUFDLENBQUM7SUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUE7QUFFRCxJQUFJLFdBQVcsR0FBRztJQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQix5QkFBeUI7QUFDN0IsQ0FBQyxDQUFBO0FBRUQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDIn0=