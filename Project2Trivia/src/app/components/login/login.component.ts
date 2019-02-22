import { Component, OnInit, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {

  title: string = "Trivia Hero!";
  logo: string = "http://placehold.it/250x250?text=Trivia Hero!";
  description: string = "A Trivia Game";
  loginObj = {
    username : '',
    password : ''
  }

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit() {
  }
configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/login'
//configUrl = 'http://localhost:8080/project2/rest/login'

onLogin(){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods" : "GET, OPTIONS, HEAD, PUT, POST"
    })
  };

  const newLocal = this;

    console.log('User name ' + newLocal.loginObj.username + ' password ' + newLocal.loginObj.password );
    if(newLocal.loginObj.username != ''){
      if(newLocal.loginObj.password !=''){
        console.log('works');
        this.http.post<User>(this.configUrl, newLocal.loginObj, httpOptions)
        .subscribe(Response => {
          if(Response.username == this.loginObj.username){
            console.log(Response);
            localStorage.setItem('currentUser', JSON.stringify(Response));
            this.router.navigate(["/main-menu"])
          }
        });
      } else {
        console.log('failed');
      }
    } else {
      console.log('failed');
    }
  }
}
