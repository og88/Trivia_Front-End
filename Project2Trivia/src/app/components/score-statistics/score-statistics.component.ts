import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-statistics',
  templateUrl: './score-statistics.component.html',
  styleUrls: ['./score-statistics.component.css']
})
export class ScoreStatisticsComponent implements OnInit {

  title: string = "Score Statistics";

  constructor() { }

  ngOnInit() {
  }

}
