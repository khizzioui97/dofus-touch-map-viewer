background.addEventListener("load", drawPath);
canvas.addEventListener("mousemove", event => {
    if (isLock) {
        drawPath(event);
    }
});

var opacity = 0.2;
function drawPath() {
    ctx.getPosition(-10, -14);
    ctx.getPosition(-11, -14);
    ctx.getPosition(-12, -14);
    ctx.getPosition(-13, -14);
}