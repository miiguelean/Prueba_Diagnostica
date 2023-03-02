var options = {
    series: [{
       name: 'Temperatura promedio',
       data: [14, 12, 16, 22]
    }],
    chart: {
       height: 200,
       type: 'line',
    },
    xaxis: {
       categories: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']
    }
 };
 
 var chart = new ApexCharts(document.querySelector("#chart"), options);
 chart.render();
 