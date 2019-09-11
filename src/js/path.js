const opacity = 0.2;
var path;

background.addEventListener("load", drawPath);
canvas.addEventListener("mousemove", event => isLock ? drawPath(event) : null);
togglePositionsButton.addEventListener("click", drawPath);
toggleGridButton.addEventListener("click", drawPath);

function drawPath() {
	if (path) {
		for (const position of path) {
			ctx.getPosition(position[0], position[1]);
		}
	} else {
		fetch("/path.json")
			.then(response => response.json())
			.then(data => {
				path = data;
				drawPath();
			});
	}
}
