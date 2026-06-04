
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
            labels: ["1"],

            datasets: [{
                data: [49.55],
                label: 'Live AI Automations',
                backgroundColor: "#03943e",
                hoverBackgroundColor: "#027631"
            },{
                data: [18.04],
                label: 'AI Automations In Development',
                backgroundColor: "#004a8c",
                hoverBackgroundColor: "#003b70"
            },{
                data: [32.41],
                label: 'Remaining Target',
                backgroundColor: "#e98531",
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
                            color: '#fff'
                        },
                        textAlign: 'center',
                    }
                },
            },
        data: {
            labels: ["live"],

            datasets: [{
                data: [18.50],
                label: 'DTF Team',
                backgroundColor: "rgba(63,103,126,1)",
                hoverBackgroundColor: "rgba(50,90,100,1)"
            },{
                data: [0.04],
                label: 'Stores',
                backgroundColor: "#03943e",
                hoverBackgroundColor: "#027631"
            },{
                data: [4.18],
                label: 'Finance and Accounts',
                backgroundColor: "#004a8c",
                hoverBackgroundColor: "#003b70"
            },{
                data: [2.10],
                label: 'Commercial',
                backgroundColor: "#6e2a92",
                hoverBackgroundColor: "#501f6a"
            },{
                data: [11.27],
                label: 'General',
                backgroundColor: "#0f4016",
                hoverBackgroundColor: "#0a2b0f"
            },{
                data: [3.08],
                label: 'Engineering',
                backgroundColor: "#085f80",
                hoverBackgroundColor: "#053b50"
            },{
                data: [2.23],
                label: 'Development Team',
                backgroundColor: "#561a58",
                hoverBackgroundColor: "#431444"
            },{
                data: [6.85],
                label: 'Production',
                backgroundColor: "#03943e",
                hoverBackgroundColor: "#027631"
            },{
                data: [1.30],
                label: 'AVT',
                backgroundColor: "#004a8c",
                hoverBackgroundColor: "#003b70"
            },{
                data: [50.45],
                label: 'Remaining Target',
                backgroundColor: "#e98531",
                hoverBackgroundColor: "#d26b16"
            }]
        },
    });
});