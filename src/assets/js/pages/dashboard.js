
$(document).ready(function() {
    
    "use strict";
    var options = {
            chart: {
                height: 350,
                type: 'bar',
                
    toolbar: {
      show: false
    }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'	
                },
            },
        
        colors:['#fc0d2a', '#007bff', '#18e04c'],

            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Emergencias',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 63, 60, 60]
            }, {
                name: 'Reportes ciudadanos',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 89, 95, 95]
            }, {
                name: 'Bienestar familiar',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 39, 46, 46]
            }],
            xaxis: {
                categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return " " + val + " "
                    }
                }
            }
        }
    var chart = new ApexCharts(
        document.querySelector("#apex1"),
        options
    );

    chart.render();
    
    
     "use strict";
        var options = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            series: [{
                name: "Eventos",
                data: [10, 41, 35, 51, 49, 62, 69]
            }],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Eventos en la semana',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#apex2"),
            options
        );

        chart.render();


        var options4 = {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                data: [1400, 1330, 1008, 870, 740, 680, 590, 400, 300]
            }],
            xaxis: {
                categories: ['Barranquilla', 'Medellin', 'Bogota', 'Cali', 'Monteria', 'Malambo', 'Maicao', 'Sincelejo', 'Cucuta'],
            }
        }

       var chart4 = new ApexCharts(
            document.querySelector("#apex4"),
            options4
        );
        
        chart4.render();


    new Chart(document.getElementById("chartjs1"),{
        "type": "doughnut",
        "data": {
            "labels": ["Policia","Ambulancia","Bomberos"],
            "datasets": [{
                "label": "Total",
                "data": [327,82,145],
                "backgroundColor": ["#fe073a","#ffc107","#007bff"]
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });





    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['ENE', 'FEB', 'MAR', 'ABR' , 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
      datasets: [{
        label: "Eventos",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#f03430',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#f03430',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#f03430',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80, 80, 100, 70, 80, 120, 80],
      }]
    };


});