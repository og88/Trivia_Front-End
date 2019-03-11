import { Component, OnInit, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit {

  title: string = "Trivia Hero!";
  
  registerObj = {
    username : '',
    password : '',
    email : ''
  }
  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit() {
  }
  configUrl = 'http://ec2-18-188-148-217.us-east-2.compute.amazonaws.com:8080/project2/rest/user/register'

  onRegister(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods" : "GET, OPTIONS, HEAD, PUT, POST"
      })
    };

    const newLocal = this;

    if(newLocal.registerObj.username != ''){
      if(newLocal.registerObj.password !=''){
        if(newLocal.registerObj.email !=''){
        this.http.post<User>(this.configUrl, newLocal.registerObj, httpOptions)
        .subscribe(Response => {
          if(Response.username == this.registerObj.username){
            localStorage.setItem('currentUser', JSON.stringify(Response));
            this.router.navigate(["/main-menu"])
          }
        });
        } 
      } 
    } 
  }
}
