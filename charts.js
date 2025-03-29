// Charts.js - Interactive visualizations for AI Course

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create all charts
    createBFSvsGBFSChart();
    createTreeVsGraphChart();
    createTruthTableChart();
    createDPLLvsWalkSATChart();
    createSupervisedVsUnsupervisedChart();
    createNeuralNetworkChart();
    createCNNFilterChart();
});

// BFS vs GBFS Chart
function createBFSvsGBFSChart() {
    const ctx = document.getElementById('bfsVsGbfsChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Time Complexity', 'Space Complexity', 'Completeness', 'Optimality'],
            datasets: [
                {
                    label: 'BFS',
                    data: [3, 3, 1, 1], // High, High, Yes, Yes
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'GBFS',
                    data: [2, 2, 0, 0], // Medium, Medium, No, No
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Breadth-First Search vs Greedy Best-First Search Performance'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const label = context.dataset.label;
                            
                            if (context.dataIndex < 2) { // Time and Space Complexity
                                const ratings = ['Low', 'Medium', 'High', 'Very High'];
                                return `${label}: ${ratings[value-1]}`;
                            } else { // Completeness and Optimality
                                return `${label}: ${value === 1 ? 'Yes' : 'No'}`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        callback: function(value) {
                            if (value <= 0) return '';
                            return ['Low', 'Medium', 'High', 'Very High'][value-1];
                        }
                    }
                }
            }
        }
    });
}

// Tree Search vs Graph Search Chart
function createTreeVsGraphChart() {
    const ctx = document.getElementById('treeVsGraphChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nodes Expanded', 'Memory Usage', 'Handles Cycles'],
            datasets: [
                {
                    label: 'Tree Search',
                    data: [3, 1, 0], // High, Low, No
                    backgroundColor: 'rgba(255, 159, 64, 0.7)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Graph Search',
                    data: [1, 3, 1], // Low, High, Yes
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Tree Search vs Graph Search Comparison'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const label = context.dataset.label;
                            
                            if (context.dataIndex < 2) { // Nodes Expanded and Memory Usage
                                const ratings = ['Low', 'Medium', 'High', 'Very High'];
                                return `${label}: ${ratings[value-1]}`;
                            } else { // Handles Cycles
                                return `${label}: ${value === 1 ? 'Yes' : 'No'}`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        callback: function(value) {
                            if (value <= 0) return '';
                            return ['Low', 'Medium', 'High', 'Very High'][value-1];
                        }
                    }
                }
            }
        }
    });
}

// Truth Table Chart
function createTruthTableChart() {
    const ctx = document.getElementById('truthTableChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['True,True', 'True,False', 'False,True', 'False,False'],
            datasets: [
                {
                    label: 'P AND Q',
                    data: [1, 0, 0, 0],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'P OR Q',
                    data: [1, 1, 1, 0],
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'P IMPLIES Q',
                    data: [1, 0, 1, 1],
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'P IFF Q',
                    data: [1, 0, 0, 1],
                    backgroundColor: 'rgba(153, 102, 255, 0.7)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Logical Connectives Truth Values'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const label = context.dataset.label;
                            return `${label}: ${value === 1 ? 'True' : 'False'}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1,
                    ticks: {
                        callback: function(value) {
                            return value === 0 ? 'False' : 'True';
                        }
                    }
                }
            }
        }
    });
}

// DPLL vs WalkSAT Chart
function createDPLLvsWalkSATChart() {
    const ctx = document.getElementById('dpllVsWalkSATChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Completeness', 'Deterministic', 'Memory Usage', 'Speed on Large Problems'],
            datasets: [
                {
                    label: 'DPLL',
                    data: [1, 1, 3, 1], // Yes, Yes, High, Slower
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'WalkSAT',
                    data: [0, 0, 1, 3], // No, No, Low, Faster
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'DPLL vs WalkSAT Comparison'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const label = context.dataset.label;
                            
                            if (context.dataIndex < 2) { // Completeness and Deterministic
                                return `${label}: ${value === 1 ? 'Yes' : 'No'}`;
                            } else if (context.dataIndex === 2) { // Memory Usage
                                const ratings = ['Low', 'Medium', 'High', 'Very High'];
                                return `${label}: ${ratings[value-1]}`;
                            } else { // Speed
                                const ratings = ['Very Slow', 'Slower', 'Medium', 'Faster', 'Very Fast'];
                                return `${label}: ${ratings[value-1]}`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        callback: function(value) {
                            if (value <= 0) return 'No/Low';
                            if (value === 1) return 'Yes/Low';
                            return ['', 'Low/Slower', 'Medium', 'High/Faster', 'Very High'][value-1];
                        }
                    }
                }
            }
        }
    });
}

// Supervised vs Unsupervised Learning Chart
function createSupervisedVsUnsupervisedChart() {
    const ctx = document.getElementById('supervisedVsUnsupervisedChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Labeled Data Required',
                'Training Complexity',
                'Prediction Accuracy',
                'Human Oversight Needed',
                'Adaptability to New Patterns'
            ],
            datasets: [
                {
                    label: 'Supervised Learning',
                    data: [5, 3, 4, 4, 2],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
                },
                {
                    label: 'Unsupervised Learning',
                    data: [1, 4, 3, 2, 5],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Supervised vs Unsupervised Learning'
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            }
        }
    });
}

// Neural Network Performance Chart
function createNeuralNetworkChart() {
    const ctx = document.getElementById('neuralNetworkChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1 Layer', '2 Layers', '3 Layers', '4 Layers'],
            datasets: [
                {
                    label: 'Training Time',
                    data: [1, 2, 3, 4],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.1
                },
                {
                    label: 'Accuracy',
                    data: [1, 2, 3, 4],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    tension: 0.1
                },
                {
                    label: 'Overfitting Risk',
                    data: [1, 2, 3, 4],
                    borderColor: 'rgba(255, 159, 64, 1)',
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Neural Network Performance by Layer Count'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const label = context.dataset.label;
                            const ratings = ['Low', 'Medium', 'High', 'Very High'];
                            return `${label}: ${ratings[value-1]}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        callback: function(value) {
                            if (value <= 0) return '';
                            return ['Low', 'Medium', 'High', 'Very High'][value-1];
                        }
                    }
                }
            }
        }
    });
}

// CNN Filter Placement Chart
function createCNNFilterChart() {
    const ctx = document.getElementById('cnnFilterChart');
    
    if (!ctx) return; // Skip if element doesn't exist
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['28×28, 5×5', '32×32, 3×3', '64×64, 3×3', '128×128, 5×5'],
            datasets: [
                {
                    label: 'Horizontal Positions',
                    data: [24, 30, 31, 64],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Vertical Positions',
                    data: [24, 30, 31, 64],
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    type: 'line',
                    label: 'Total Positions',
                    data: [576, 900, 961, 4096],
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'CNN Filter Positions vs Input Size'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Positions per Dimension'
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'Total Positions'
                    }
                }
            }
        }
    });
}
