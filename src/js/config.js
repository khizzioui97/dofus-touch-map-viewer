var lineWidth = 1;
var textSize = 16;
var lineColor = "black";
var textColor = "#33ffff";
var textFont = `bold ${textSize}px Georgia`;
var originX = 0;
var originY = 0;
var disablePositions = true;
var disableGrid = true;
const grid = {
    start: [-94, -99],
    rows: {
        length: 160,
        width: 50
    },
    cols: {
        length: 145,
        width: 69
    },
    load: function () {
        if (!disableGrid) {
            for (let i = 1; i <= grid.rows.length; i++) {
                ctx.drawLine(background.width, (-grid.rows.width * i) + background.height, -background.width, 0);
            }
            for (let i = 1; i <= grid.cols.length; i++) {
                ctx.drawLine((grid.cols.width * i), 0, 0, background.height);
            }
        }
        if (!disablePositions) {
            grid.loadPositions();
        }
    },
    loadPositions: function () {
        const startRightX = Math.floor(Math.abs(originX - window.innerWidth) / grid.cols.width) + 1;
        const startLeftX = Math.floor(Math.abs(originX) / grid.cols.width);
        const startRightY = Math.floor(Math.abs(originY - window.innerHeight) / grid.rows.width) + 1;
        const startLeftY = Math.floor(Math.abs(originY) / grid.rows.width);
    
        for (let i = 1; i <= grid.rows.length; i++) {
            for (let j = 1; j <= grid.cols.length; j++) {
                if (j <= startRightX && j >= startLeftX && i <= startRightY && i >= startLeftY) {
                    const posX = grid.start[0] + j - 1;
                    const posY = grid.start[1] + i - 1;
                    ctx.drawText(`${posX}, ${posY}`, (grid.cols.width * (j - 1)), grid.rows.width * (i - 1));
                }
            }
        }
    }
}