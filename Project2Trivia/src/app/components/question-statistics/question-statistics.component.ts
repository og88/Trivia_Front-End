import { PieChartConfig } from './../../models/pie-chart-config';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import {QuestionTrack} from 'src/app/models/question-track';



@Component({
  templateUrl: './question-statistics.component.html',
  styleUrls: ['./question-statistics.component.css']
})
export class QuestionStatisticsComponent {
  title = 'Reusable charts sample';

  users : User[];
  questions: QuestionTrack[];

  constructor(private http : HttpClient) { }

  //configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/questions';
  configUrl = 'http://localhost:8080/project2/rest/questions';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;
  

  
  ngOnInit(): void {     

    this.http.get<any[]>(this.configUrl)
        .subscribe(Response => {
         this.questions = Response;    
        });


        console.log(this.questions[0]);
    //Piechart1 Data & Config
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat',      3],
    ['Commute',  2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep',    10]];

    this.config1 = new PieChartConfig('Percentage of correct responses', 0.4);
    this.elementId1 = 'myPieChart1';
  }

}