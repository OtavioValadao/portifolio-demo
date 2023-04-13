import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  @Input() experiencias: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

  }
}
