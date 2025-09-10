document.addEventListener("DOMContentLoaded", () => {
    const reminderForm = document.getElementById("reminderForm");
    const reminderTime = document.getElementById("reminderTime");
    const reminderMessage = document.getElementById("reminderMessage");
    const alertBox = document.getElementById("alertBox");
    const alertMessage = document.getElementById("alertMessage");
    const dismissAlert = document.getElementById("dismissAlert");

    // Handle reminder form submission
    reminderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const time = reminderTime.value;
        const message = reminderMessage.value;

        if (time && message) {
            // Store reminder message in localStorage
            localStorage.setItem("reminderTime", time);
            localStorage.setItem("reminderMessage", message);

            // Set up the alert
            setReminderAlert(time, message);

            // Clear form
            reminderTime.value = '';
            reminderMessage.value = '';
        }
    });

    // Display alert if reminder time is matched
    function setReminderAlert(time, message) {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (currentTime === time) {
            alertMessage.textContent = message;
            alertBox.style.display = 'block';
        }
    }

    // Dismiss alert
    dismissAlert.addEventListener("click", () => {
        alertBox.style.display = 'none';
    });

    // Check for reminder every minute
    setInterval(() => {
        const storedTime = localStorage.getItem("reminderTime");
        const storedMessage = localStorage.getItem("reminderMessage");

        if (storedTime && storedMessage) {
            setReminderAlert(storedTime, storedMessage);
        }
    }, 60000); // Check every minute
});
