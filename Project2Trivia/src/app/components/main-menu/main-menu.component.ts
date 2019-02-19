import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  title: string = "Trivia Hero!";

  constructor() { }

  ngOnInit() {
  }

  logout(){
    //clear local store when logout button is clicked
    localStorage.clear();
  }

}
