const container = document.getElementById("container");

for (let i = 0; i < 800; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        const color = getRandomColor();
        square.style.backgroundColor = color;
    });

    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "#1d1d1d"; // 🔥 instant reset
    });

    container.appendChild(square);
}

function getRandomColor() {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
    return colors[Math.floor(Math.random() * colors.length)];
}