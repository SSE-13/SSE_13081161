/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {

    T = "";
    
    render(context: CanvasRenderingContext2D) {
        context.font = "36px Arial";
        context.fillStyle = '#000000';
        context.fillText(this.T, 0, 20);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
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
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");


var rect = new Rect();
rect.width = 800;
rect.height = 400;
rect.color = '#14e3cd'


var rect2 = new Rect();
rect2.width = 800;
rect2.height = 100;
rect2.x = 0;
rect2.y = 300;
//rect2.rotation = Math.PI / 8;
rect2.color = '#31e314'

var rect3 = new Rect();
rect3.width = 50;
rect3.height = 50;
rect3.x =100;
rect3.y = 320;
rect3.color = '#dce314'

var rect4 = new Rect();
rect4.width = 100;
rect4.height = 50;
rect4.x =350;
rect4.y = 320;
rect4.color = '#dce314'

var rect5 = new Rect();
rect5.width = 50;
rect5.height = 50;
rect5.x =700;
rect5.y = 320;
rect5.color = '#dce314'

var text = new TextField();
text.x = 380;
text.y=340;
text.T="Play";

var bitmap = new Bitmap();
bitmap.source = '13081161.png';
bitmap.x=200;
bitmap.y = 10;

//渲染队列
var renderQueue = [rect, rect2,rect3, rect4,rect5,text,bitmap];
//资源加载列表
var imageList = ['13081161.png'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


