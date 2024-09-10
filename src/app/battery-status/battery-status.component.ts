import { Component } from '@angular/core';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.css']
})
export class BatteryStatusComponent {
  batteryData = [
    { percentage: 100, icon: 'fas fa-battery-full', color: 'bg-success' },
    { percentage: 50, icon: 'fas fa-battery-half', color: 'bg-warning' },
    { percentage: 25, icon: 'fas fa-battery-quarter', color: 'bg-danger' }
  ];
}