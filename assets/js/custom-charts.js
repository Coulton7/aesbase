
document.addEventListener("DOMContentLoaded", function() {
    let dvpInProg = document.getElementById("developmentInProg").getContext('2d');
    let depInProg = document.getElementById("departmentInProg").getContext('2d');

    new Chart(dvpInProg,{
        type: 'bar',
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
                }
            },
        },
        
        data: {
            labels: ["Overall Progress"],

            datasets: [{
                data: [49.55],
                label: 'Live AI Automations',
                backgroundColor: "#0bb305",
                hoverBackgroundColor: "#058D00"
            },{
                data: [18.04],
                label: 'AI Automations In Development',
                backgroundColor: "#14bcdc",
                hoverBackgroundColor: "#1096b0"
            },{
                data: [32.41],
                label: 'Remaining Target',
                backgroundColor: "#e98431",
                hoverBackgroundColor: "#d26b16"
            }]
        },
    });

    new Chart(depInProg,{
        type: 'bar',
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
                        text: 'Live Department Progress',
                        color: '#fff',
                        font: {
                            size: 24
                        }
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#fff',
                        },
                        textAlign: 'center',
                    },
                },
        },
        data: {
            labels: ["By Departmernt"],

            datasets: [{
                data: [18.50],
                label: 'DTF Team',
                backgroundColor: "#fcba08",
                hoverBackgroundColor: "#CD9702"
            },{
                data: [0.04],
                label: 'Stores',
                backgroundColor: "#7a69c7",
                hoverBackgroundColor: "#61549F"
            },{
                data: [4.18],
                label: 'Finance and Accounts',
                backgroundColor: "#14b67f",
                hoverBackgroundColor: "#109165"
            },{
                data: [2.10],
                label: 'Commercial',
                backgroundColor: "#b62e14",
                hoverBackgroundColor: "#912410"
            },{
                data: [11.27],
                label: 'General',
                backgroundColor: "#b9a243",
                hoverBackgroundColor: "#948135"
            },{
                data: [3.08],
                label: 'Engineering',
                backgroundColor: "#27a1f6",
                hoverBackgroundColor: "#1f80c4"
            },{
                data: [2.23],
                label: 'Development Team',
                backgroundColor: "#a93491",
                hoverBackgroundColor: "#872974"
            },{
                data: [6.85],
                label: 'Production',
                backgroundColor: "#509c11",
                hoverBackgroundColor: "#407c0d"
            },{
                data: [1.30],
                label: 'AVT',
                backgroundColor: "#43b4b9",
                hoverBackgroundColor: "#359094"
            },{
                data: [50.45],
                label: 'Remaining Target',
                backgroundColor: "#e98531",
                hoverBackgroundColor: "#d26b16"
            }]
        },
    });
});