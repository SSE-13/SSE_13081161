var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 基类，负责处理x,y,rotation 等属性
 */
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
    }
    DisplayObject.prototype.draw = function (context) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);
        context.restore();
    };
    DisplayObject.prototype.render = function (context) {
    };
    return DisplayObject;
}());
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
    }
    Bitmap.prototype.render = function (context) {
        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    };
    return Bitmap;
}(DisplayObject));
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.apply(this, arguments);
        this.width = 100;
        this.height = 100;
        this.color = '#FF0000';
    }
    Rect.prototype.render = function (context) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    };
    return Rect;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.T = "";
    }
    TextField.prototype.render = function (context) {
        context.font = "36px Arial";
        context.fillStyle = '#000000';
        context.fillText(this.T, 0, 20);
    };
    return TextField;
}(DisplayObject));
function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject = renderQueue[i];
        displayObject.draw(context);
    }
}
var imagePool = {};
function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function (imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;
        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        function onLoadError() {
            alert('资源加载失败:' + imageUrl);
        }
    });
}
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var rect = new Rect();
rect.width = 800;
rect.height = 400;
rect.color = '#14e3cd';
var rect2 = new Rect();
rect2.width = 800;
rect2.height = 100;
rect2.x = 0;
rect2.y = 300;
//rect2.rotation = Math.PI / 8;
rect2.color = '#31e314';
var rect3 = new Rect();
rect3.width = 50;
rect3.height = 50;
rect3.x = 50;
rect3.y = 300;
rect3.color = '#dce314';
var rect4 = new Rect();
rect4.width = 100;
rect4.height = 50;
rect4.x = 200;
rect4.y = 300;
rect4.color = '#dce314';
var rect5 = new Rect();
rect5.width = 50;
rect5.height = 50;
rect5.x = 500;
rect5.y = 300;
rect5.color = '#dce314';
var text = new TextField();
text.x = 200;
text.y = 100;
text.T = "Play";
var bitmap = new Bitmap();
bitmap.source = '13081161.png';
bitmap.x = 200;
bitmap.y = 10;
//渲染队列
var renderQueue = [rect, rect2, rect3, rect4, rect, rect2, text, bitmap];
//资源加载列表
var imageList = ['13081161.png'];
//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function () {
    drawQueue(renderQueue);
});
