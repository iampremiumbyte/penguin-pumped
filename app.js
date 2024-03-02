
const styleBoxes = () => {

    Array(4).fill(0).forEach((_, i) => {
        const box1 = document.getElementById(`box${i + 1}`);

        const area1 = document.getElementById(`area${i + 1}`);

        const coords = area1.coords.split(",");

        box1.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box1.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box1.style.left = coords[0] + "px"
        box1.style.top = coords[1] + "px"
    });

}


setTimeout(() => {
    styleBoxes();
}, 1000)

