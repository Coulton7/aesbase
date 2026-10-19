
document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("developmentInProg")){
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
                        color: '#ffffff'
                    },
                    textAlign: 'center',
                },
                tooltip: {
                    callbacks: {
                        label: function(context){
                            let label = context.dataset.label || '';
                            let value = context.raw || 0;
                            return label + ': ' + value + '%';
                        }
                    }
                }
            },
        },
    });
    }

    if(document.getElementById("sealSupportChart")){
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
    }

    if(document.getElementById("dmsfChart")){
        let dmsfChart = document.getElementById("dmsfChart").getContext('2d');
        var dmsfData = {
            labels: ['1.375"(35mm)', '4.000(100mm)'],
            datasets: [{
                data: [2.0, 0.05, 0.5],
                backgroundColor: ['#002a5a', '#dd1e25', '#888c8f'],
                label: ['AESSEAL', 'Competitor 1', 'Competitor 2'],
                yAxisID: 'lMin',
            }, {
                data: [1.1, 0.05, 0.3],
                backgroundColor: ['#002a5a', '#dd1e25', '#888c8f'],
                label: ['AESSEAL', 'Competitor 1', 'Competitor 2'],
                yAxisID: 'gMin',
            }]
        }

        new Chart(dmsfChart, {
            type: 'bar',
            data: dmsfData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        yAxisID: 'lMin',
                        beginAtZero: true,
                        type: 'linear',
                        position : 'left',
                        max: 6,
                        min: 0,
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                    y1: {
                        yAxisID: 'gMin',
                        beginAtZero: true,
                        type: 'linear',
                        position : 'right',
                        max: 1.4,
                        min: 0,
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Typical Comparative Barrier Fluid Flow Rates for Dual Seals',
                        color: '#535354',
                        font: {
                                size: 18
                            }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            color: '#535354'
                        },
                        textAlign: 'center',
                    },
                }
            }
        });
    }
});