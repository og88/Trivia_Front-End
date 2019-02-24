import { PieChartConfig } from './../../models/pie-chart-config';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import {QuestionTrack} from 'src/app/models/question-track';
import { Router } from '@angular/router';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  title = 'Statistics';

  users : User[];
  questions: QuestionTrack[];

  constructor(private http : HttpClient, public router: Router) { }

  //configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/questions';
  //configUrl = 'http://localhost:8080/project2/rest/questions';

  data1: any[];
  config1: PieChartConfig;
  elementId: String;
  dataArray: any[];
  question:QuestionTrack;

  
  ngOnInit(): void {   
    this.question = JSON.parse(localStorage.getItem('question'));
    this.UpdateCharts();

  }



UpdateCharts(){
  this.data1 = [['Correct', 'Incorrect'],
     ['Correct',     this.question.correctCount],
     ['Incorrect',  this.question.incorrectCount]];

  this.config1 = new PieChartConfig('Percentage of correct responses', 0.4);
  this.elementId = 'myPieChart1';
}

}