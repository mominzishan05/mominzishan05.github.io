document.querySelector('.btn-subscribe')?.addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    if (email.trim() !== "") {
      alert(`Thank you for subscribing, ${email}! 🧠`);
    } else {
      alert("Please enter a valid email.");
    }
  });
  