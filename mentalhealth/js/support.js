document.addEventListener("DOMContentLoaded", () => {
    // Example function for community post interactions (e.g., joining discussion)
    const joinButtons = document.querySelectorAll(".forum-post button");

    joinButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            alert("You have joined the discussion!");
        });
    });
});
