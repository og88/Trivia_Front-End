import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  pageTitle: string = "Leaderboard";

  users : User[];

  constructor(private http : HttpClient) { }

  configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/leader'
  //configUrl = 'http://localhost:8080/project2/rest/leader'

  ngOnInit() {

    this.http.get<User[]>(this.configUrl)
        .subscribe(Response => {
         this.users = Response;    
        });

  }


}
