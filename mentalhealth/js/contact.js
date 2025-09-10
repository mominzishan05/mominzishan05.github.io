document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && subject && message) {
      alert(`Thank you ${name}! We'll get back to you soon.`);
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  