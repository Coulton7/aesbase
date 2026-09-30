
document.addEventListener("DOMContentLoaded", function() {
    let dvpInProg = document.getElementById("developmentInProg").getContext('2d');

    const develData = {
        labels: ["Overall Progress"],
        datasets: [{
            data: [65.69],
            label: 'Live AI Automations',
            backgroundColor: "#0bb305",
            hoverBackgroundColor: "#058D00"
        },{
            data: [13.54],
            label: 'AI Automations In Development',
            backgroundColor: "#14bcdc",
            hoverBackgroundColor: "#1096b0"
        },{
            data: [20.77],
            label: 'Remaining Target',
            backgroundColor: "#e98431",
            hoverBackgroundColor: "#d26b16"
        }]
    }

    new Chart(dvpInProg,{
        type: 'bar',
        data: develData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        color: '#fff',
                    },
                    ticks: {
                        color: '#fff'
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    grid: {
                        color: '#fff',
                    },
                    ticks: {
                        color: '#fff'
                    },
                    border: {
                        display: false
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Live & In - Devlopment Progress',
                    color: '#fff',
                    font: {
                            size: 24
                        }
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#fff'
                    },
                    textAlign: 'center',
                },
                tooltip: {
                    callbacks: {
                        label: function(context){
                            let label = context.label || '';
                            let value = context.raw || 0;
                            return label + ': ' + value + '%';
                        }
                    }
                }
            },
        },
    });

    let sealSupport = document.getElementById("sealSupportChart");

    const sealSupportData = {
        labels: [
                'Seal System', 'Operations', 'Bearing', 'Workshop', 'Install/Align', 'Process', 'Seal'
            ],
            datasets: [{
                data: [22, 37, 13, 7, 5, 12, 4],
                label: 'Seal Support',
                backgroundColor:[ '#dd1e25', '#e5e5e7', '#b5b6b9', '#004a8c', '#888c8f', '#002a5b', '#667f9c' ],
            }]
    };

    new Chart(sealSupport, {
        type: 'pie',
         data: sealSupportData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Seal Support',
                    color: '#535354',
                    font: {
                        size: 24
                    }
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        generateLabels: (chart => {
                            const datasets = chart.data.datasets;
                            return datasets[0].data.map(( data, i) =>
                            ({
                                text: `${chart.data.labels[i]} ${data}%`,
                                fillStyle: datasets[0].backgroundColor[i],
                                fontColor: '#535354',
                                index: i
                            }))
                        }),
                        color: '#535354'
                    },
                    textAlign: 'center',
                },
                tooltip: {
                    callbacks: {
                        label: function(context){
                            let label = context.label || '';
                            let value = context.raw || 0;
                            let total = context.dataset.data.reduce((acc, curr)=> acc+curr, 0);
                            let percentage =(value/total * 100).toFixed(0) + '%';
                            return label + ': ' + percentage + '';
                        }
                    }
                }
            },
        },       
    });
});