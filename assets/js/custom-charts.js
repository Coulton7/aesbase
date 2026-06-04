
document.addEventListener("DOMContentLoaded", function() {
    let dvpInProg = document.getElementById("developmentInProg").getContext('2d');
    let depInProg = document.getElementById("departmentInProg").getContext('2d');

    new Chart(dvpInProg,{
        type: 'bar',
        options: {
            responsive: true,
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        borderColor: '#fff',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                y: {
                    stacked: true,
                    grid: {
                        borderColor: '#fff',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
        },
        
        data: {
            labels: ["1"],

            datasets: [{
                data: [49.55],
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            },{
                data: [18.04],
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)"
            },{
                data: [32.41],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            }]
        },
    });

    new Chart(depInProg,{
        type: 'bar',
        options: {
            responsive: true,
            indexAxis: 'y',
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                                borderColor: '#fff',
                                color: '#fff'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                                borderColor: '#fff',
                                color: '#fff'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    }
                },
                plugins: {
                    legend: {
                    display: false
                    }
                },
            },
        data: {
            labels: ["live"],

            datasets: [{
                data: [18.50],
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            },{
                data: [0.04],
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)"
            },{
                data: [4.18],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            },{
                data: [2.10],
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            },{
                data: [11.27],
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)"
            },{
                data: [3.08],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            },{
                data: [2.23],
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            },{
                data: [6.85],
                backgroundColor: "rgba(163,103,126,1)",
                hoverBackgroundColor: "rgba(140,85,100,1)"
            },{
                data: [1.30],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            },{
                data: [50.45],
                backgroundColor: "rgba(63,203,226,1)",
                hoverBackgroundColor: "rgba(46,185,235,1)"
            }]
        },
    });
});