//your JS code here. If required.
const container = document.getElementById("container");

// create 800 boxes
for (let i = 0; i < 800; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

// random color generator
function getRandomColor() {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// apply color
function setColor(el) {
    const color = getRandomColor();
    el.style.backgroundColor = color;
}

// remove color smoothly
function removeColor(el) {
    setTimeout(() => {
        el.style.backgroundColor = "#1d1d1d";
    }, 1000);
}