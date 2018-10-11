import {Component, OnInit} from '@angular/core';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.css']
})
export class DashboardComponent implements OnInit {

  contests: any[];
  constructor() {
    };

  ngOnInit(){
    this.contests = 
    [
      {
        title: '我要減肥',
        point: 500,
        left: 3,
        dueDate: '10.31.18'
      },
      {
        title: '我要減肥2',
        point: 500,
        left: 3,
        dueDate: '10.31.18'
      },
      {
        title: '我要減肥3',
        point: 500,
        left: 3,
        dueDate: '10.31.18'
      },
      {
        title: '我要減肥4',
        point: 500,
        left: 3,
        dueDate: '10.31.18'
      },
      {
        title: '我要減肥5',
        point: 500,
        left: 3,
        dueDate: '10.31.18'
      },
    ]
  }
}
