document.addEventListener("DOMContentLoaded", () => {
    const moodCards = document.querySelectorAll(".mood-card");
    const selectedMoodInput = document.getElementById("selectedMood");
    const moodForm = document.getElementById("moodForm");
    const moodLog = document.getElementById("moodLog");
  
    moodCards.forEach((card) => {
      card.addEventListener("click", () => {
        moodCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        selectedMoodInput.value = card.getAttribute("data-mood");
      });
    });
  
    moodForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const mood = selectedMoodInput.value;
      const notes = document.getElementById("notes").value;
  
      if (!mood) {
        alert("Please select a mood first.");
        return;
      }
  
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.innerHTML = `<strong>${mood}</strong><br>${notes || "No notes"}<br><small>${new Date().toLocaleString()}</small>`;
      moodLog.prepend(listItem);
  
      moodForm.reset();
      selectedMoodInput.value = "";
      moodCards.forEach((c) => c.classList.remove("active"));
    });
  });
  