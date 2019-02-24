import { PieChartConfig } from './../../models/pie-chart-config';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import {QuestionTrack} from 'src/app/models/question-track';
import { Router } from '@angular/router';



@Component({
  templateUrl: './question-statistics.component.html',
  styleUrls: ['./question-statistics.component.css']
})
export class QuestionStatisticsComponent {
  title = 'Question Statistics';

  users : User[];
  questions: QuestionTrack[];

  constructor(private http : HttpClient, public router: Router) { }

  configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/questions';
  //configUrl = 'http://localhost:8080/project2/rest/questions';

  data1: any[];
  config1: PieChartConfig;
  elementId: String;
  dataArray: any[];
  

  
  ngOnInit(): void {     

    this.http.get<any[]>(this.configUrl)
        .subscribe(Response => {
         this.questions = Response; 
         this.UpdateCharts();   
        });

  }



UpdateCharts(){

  
  this.data1 = [['Correct', 'Incorrect'],
     ['Correct',      this.questions[0].correctCount],
     ['Incorrect',  this.questions[0].incorrectCount]];

  this.config1 = new PieChartConfig('Percentage of correct responses', 0.4);
  this.elementId = 'myPieChart1';
}

getData(i : number){
  localStorage.setItem('question', JSON.stringify(this.questions[i]));
  this.router.navigate(["/statistics"])

}
}