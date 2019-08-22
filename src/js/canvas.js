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

background.load = () => {
    ctx.translate(originX, originY);
    ctx.drawImage(background, 0, 0);
    ctx.translate(-originX, -originY);
    grid.load();
}

var isLock = false;

canvas.addEventListener("mousedown", () => isLock = true);
canvas.addEventListener("mouseup", () => isLock = false);
canvas.addEventListener("mousemove", event => {
    if (isLock) {
        originX += event.movementX;
        originY += event.movementY;
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
}

ctx.drawLine = function(posX, posY, lx, ly) {
    const x = originX + posX;
    const y = originY + posY;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + lx, y + ly);
    ctx.stroke();
}
