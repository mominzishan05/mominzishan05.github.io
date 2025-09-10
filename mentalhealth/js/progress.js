document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("progressChart").getContext("2d");
  
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: "Mood Score (1-10)",
          data: [6, 7, 8, 9, 5, 7, 8],
          fill: false,
          borderColor: "#c0392b",
          backgroundColor: "#c0392b",
          tension: 0.3,
          pointRadius: 5,
          pointBackgroundColor: "#c0392b"
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  });
  