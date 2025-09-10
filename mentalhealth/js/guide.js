document.addEventListener("DOMContentLoaded", () => {
    // Example function for guide interactions (you can add more interactivity later)
    const guideBoxes = document.querySelectorAll(".guide-box, .exercise-box");

    guideBoxes.forEach(box => {
        box.addEventListener("click", (e) => {
            alert("You clicked on: " + box.querySelector('h5').innerText);
        });
    });
});
