import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  @Input() ano1: String | undefined
  @Input() cargo1: String | undefined
  @Input() empresa1: String | undefined

  @Input() ano2: String | undefined
  @Input() cargo2: String | undefined
  @Input() empresa2: String | undefined

  @Input() ano3: String | undefined
  @Input() cargo3: String | undefined
  @Input() empresa3: String | undefined
  constructor() { }

  ngOnInit(): void {

  }
}
