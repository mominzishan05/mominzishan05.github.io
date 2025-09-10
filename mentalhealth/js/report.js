var ctx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Task 1', 'Task 2', 'Task 3'],
        datasets: [{
            label: 'Completion (%)',
            data: [100, 60, 90],
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
