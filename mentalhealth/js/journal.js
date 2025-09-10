document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("journalForm");
    const log = document.getElementById("journalLog");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const date = document.getElementById("journalDate").value;
      const mood = document.getElementById("journalMood").value;
      const thoughts = document.getElementById("journalText").value;
  
      const entry = document.createElement("li");
      entry.className = "list-group-item";
      entry.innerHTML = `
        <strong>${date}</strong> - <em>${mood}</em><br />
        ${thoughts}<br />
        <small>${new Date().toLocaleTimeString()}</small>
      `;
  
      log.prepend(entry);
      form.reset();
    });
  });
  