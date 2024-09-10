import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-battery-charts',
  templateUrl: './battery-charts.component.html',
  styleUrls: ['./battery-charts.component.css']
})
export class BatteryChartsComponent implements OnInit {

 
  ngOnInit(): void {
    this.createCharts();
  }

  createCharts(): void {
    // Battery Chart
    const batteryCanvas = document.getElementById('batteryChart') as HTMLCanvasElement;
    if (batteryCanvas) {
      const batteryCtx = batteryCanvas.getContext('2d');
      if (batteryCtx) {
        new Chart(batteryCtx, {
          type: 'line',
          data: {
            labels: [], // X-axis labels (time)
            datasets: [
              {
                label: 'Battery 1 (V)',
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Battery 1
              },
              {
                label: 'Battery 2 (V)',
                borderColor: 'blue',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Battery 2
              },
              {
                label: 'Battery 3 (V)',
                borderColor: 'orange',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Battery 3
              }
            ]
          },
          options: {
            scales: {
              x: {
                ticks: {
                  color: 'white' // X-axis label color
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)' // X-axis grid color
                }
              },
              y: {
                ticks: {
                  color: 'white' // Y-axis label color
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)' // Y-axis grid color
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: 'white' // Legend label color
                }
              },
              tooltip: {
                callbacks: {
                  labelTextColor: () => 'white' // Tooltip text color
                }
              }
            }
          }
        });
      } else {
        console.error('Battery Chart 2D context could not be retrieved.');
      }
    } else {
      console.error('Battery Chart canvas element not found.');
    }

    // Temperature Chart
    const tempCanvas = document.getElementById('temperatureChart') as HTMLCanvasElement;
    if (tempCanvas) {
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        new Chart(tempCtx, {
          type: 'line',
          data: {
            labels: [], // X-axis labels (time)
            datasets: [
              {
                label: 'Temperature (C)',
                borderColor: 'black',
                borderWidth: 2,
                fill: false,
                data: [] // Y-axis data for Temperature
              }
            ]
          },
          options: {
            scales: {
              x: {
                ticks: {
                  color: 'white' // X-axis label color
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)' // X-axis grid color
                }
              },
              y: {
                ticks: {
                  color: 'white' // Y-axis label color
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)' // Y-axis grid color
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: 'white' // Legend label color
                }
              },
              tooltip: {
                callbacks: {
                  labelTextColor: () => 'white' // Tooltip text color
                }
              }
            }
          }
        });
      } else {
        console.error('Temperature Chart 2D context could not be retrieved.');
      }
    } else {
      console.error('Temperature Chart canvas element not found.');
    }
  }
}