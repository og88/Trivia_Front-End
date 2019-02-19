import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Trivia Hero!";
  logo: string = "http://placehold.it/250x250?text=Trivia Hero!";
  description: string = "A Trivia Game";

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    
  }

}
