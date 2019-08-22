const togglePositionsButton = document.querySelector("nav > button[data-action='toggle positions']");
const toggleGridButton = document.querySelector("nav > button[data-action='toggle grid']");

togglePositionsButton.addEventListener("click", () => {
    disablePositions = !disablePositions;
    background.load();
});

toggleGridButton.addEventListener("click", () => {
    disableGrid = !disableGrid;
    background.load();
});
