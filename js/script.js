var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Fruits', 'Grains', 'Protein', 'Vegetables'],
        datasets: [{
            fillColor: "#79D1CF",
            strokeColor: "#79D1CF",
            backgroundColor: [
                'rgba(255, 0, 0, 0.1)',
                'rgb(150, 128, 104)',
                'rgba(255, 0, 0, 0.56)',
                'rgba(0, 255, 0, 1)'
            ],
            data: [60, 80, 81, 56]
        }]
    },

    // Configuration options go here
    options: {}
});





























/* */
