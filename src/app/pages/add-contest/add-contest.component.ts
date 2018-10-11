import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.scss']
})
export class AddContestComponent implements OnInit {

  starRate = 2;
  heartRate = 4;

  constructor() {
  }

  ngOnInit() {
  };


}
