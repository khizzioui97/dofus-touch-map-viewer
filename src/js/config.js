var lineWidth = 1;
var textSize = 14;
var lineColor = "black";
var textColor = "#33ffff";
var textFont = `bold ${textSize}px Georgia`;
var originX = 0;
var originY = 0;
var disablePositions = true;
var disableGrid = false;
var grid = {
    start: [-94, -100],
    end: [50, 61],
    offsetX: 25,
    offsetY: 54,
    rows: {
        get length() {
            return Math.abs(grid.start[1] - grid.end[1]);
        },
        get width() {
            return background.height / grid.rows.length
        }
    },
    cols: {
        get length() {
            return Math.abs(grid.start[0] - grid.end[0]);
        },
        get width() {
            return background.width / grid.cols.length
        }
    },
    load: function () {
        if (!disableGrid) {
            for (let i = 1; i <= grid.rows.length; i++) {
                ctx.drawLine(0, (grid.rows.width * i) - grid.offsetX, background.width, 0);
            }
            for (let i = 1; i <= grid.cols.length; i++) {
                ctx.drawLine((grid.cols.width * i) - grid.offsetY, 0, 0, background.height);
            }
        }
        if (!disablePositions) {
            grid.loadPositions();
        }
    },
    loadPositions: function () {
        const startRightX = Math.floor(Math.abs(originX - window.innerWidth) / grid.cols.width) + 2;
        const startRightY = Math.floor(Math.abs(originY - window.innerHeight) / grid.rows.width) + 2;
        const startLeftX = Math.floor(Math.abs(originX) / grid.cols.width);
        const startLeftY = Math.floor(Math.abs(originY) / grid.rows.width);
    
        for (let i = 1; i <= grid.rows.length; i++) {
            for (let j = 1; j <= grid.cols.length; j++) {
                if (j <= startRightX && j >= startLeftX && i <= startRightY && i >= startLeftY) {
                    const posX = grid.start[0] + j - 1;
                    const posY = grid.start[1] + i - 1;
                    ctx.drawText(
                        `${posX}, ${posY}`,
                        (grid.cols.width * (j - 1)) - grid.offsetY,
                        (grid.rows.width * (i - 1)) - grid.offsetX
                    );
                }
            }
        }
    }
}
