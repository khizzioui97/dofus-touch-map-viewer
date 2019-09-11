const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = textFont;
ctx.fillStyle = textColor;
ctx.lineWidth = lineWidth;
ctx.strokeStyle = lineColor;

const backgroundImagePath = "/img/world.jpg";

const background = new Image();
background.addEventListener("load", () => {
    originX = -background.width/2;
    originY = -background.height/2;
    background.load();
}, { once: true });
background.src = backgroundImagePath;

background.load = (x = 0, y = 0) => {
    ctx.translate(originX, originY);
    ctx.drawImage(background, x, y);
    ctx.translate(-originX, -originY);
    grid.load();
};

var isLock = false;

canvas.addEventListener("mousedown", () => isLock = true);
canvas.addEventListener("mouseup", () => isLock = false);
canvas.addEventListener("mousemove", event => {
    if (isLock) {
        if (originX + event.movementX > 0) {
            originX = 0;
        } else if (originX + event.movementX < -background.width + canvas.width) {
            originX = -background.width + canvas.width;
        } else {
            originX += event.movementX;
        }
        if (originY + event.movementY > 0) {
            originY = 0;
        } else if (originY + event.movementY < -background.height + canvas.height) {
            originY = -background.height + canvas.height;
        } else {
            originY += event.movementY;
        }
        background.load();
    }
});

ctx.drawText = function(text, x, y) {
    const textWidth = ctx.measureText(text).width
    ctx.fillText(
        text,
        originX + x + (grid.cols.width - textWidth)/2,
        originY + y + textSize + (grid.rows.width/2) - (textSize/2) - 6
    );
};

ctx.drawLine = function(posX, posY, lx, ly) {
    const x = originX + posX;
    const y = originY + posY;

    ctx.beginPath();
    ctx.moveTo(x - 0.5, y + 0.5);
    ctx.lineTo(x + lx - 0.5, y + ly + 0.5);
    ctx.stroke();
};

ctx.getPosition = function(x, y) {
    const oldFillStyle = textColor;
    ctx.globalAlpha = opacity;
    ctx.fillStyle = pathFillStyle;
    ctx.translate(-grid.offsetY, -grid.offsetX);
    const posX = originX - (grid.cols.width * (grid.start[0] - x));
    const posY = originY - (grid.rows.width * (grid.start[1] - y));
    ctx.fillRect(posX, posY + 1, grid.cols.width - 1, grid.rows.width - 1);
    ctx.translate(grid.offsetY, grid.offsetX);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = oldFillStyle;
};
