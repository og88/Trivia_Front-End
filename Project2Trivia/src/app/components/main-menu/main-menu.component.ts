import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  title: string = "Trivia Hero!";

  user : User = JSON.parse(localStorage.getItem('currentUser'));

  constructor() { }

  ngOnInit() {
    
  }

  logout(){
    //clear local store when logout button is clicked
    localStorage.clear();
  }

}
