const colorOptions = { "white": "#fff8f8", "yellow": "#FFD93D", "green": "#6BCB77", "blue": "#4D96FF", "pink": "#FF6FFB", "purple": "#A66DD4", "orange": "#FF8C42", "teal": "#20C997", "cyan": "#4ECDC4" };
let currentColor = "white";
function changeColor(color) {
    if (colorOptions[color]) {
        document.body.style.backgroundColor = colorOptions[color];
        document.getElementById("currentColor").textContent = color;
    } else {
        console.error("Invalid color option");
    }
}