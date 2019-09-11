const togglePositionsButton = document.querySelector("nav > button[data-action='toggle positions']");
const toggleGridButton = document.querySelector("nav > button[data-action='toggle grid']");
const toggleHintsButton = document.querySelector("nav > button[data-action='toggle hints']");

togglePositionsButton.addEventListener("click", () => {
    disablePositions = !disablePositions;
    background.load();
});

toggleGridButton.addEventListener("click", () => {
    disableGrid = !disableGrid;
    background.load();
});

toggleHintsButton.addEventListener("click", () => {
    disableHints = !disableHints;
    background.load();
});
