const assetsImagePath = "/img/assets.png";
var assets;
var hints;

var assetsImage = new Image();
assetsImage.addEventListener("load", () => {}, { once: true });
assetsImage.src = assetsImagePath;

function getSymbol(nameId) {
	for (let symbolId in assets.symbols) {
		const symbol = assets.symbols[symbolId];

		if (symbol.className == "icon_" + nameId) {
			return symbol;
		}
	}
}
