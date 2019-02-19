import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';

@Component({
  selector: 'app-guest-menu',
  templateUrl: './guest-menu.component.html',
  styleUrls: ['./guest-menu.component.css']
})
export class GuestMenuComponent implements OnInit {

  title: string = "Trivia Hero!";
  logo: string = "http://placehold.it/250x250?text=Trivia Hero!";
  description: string = "A Trivia Game";

  /*constructor(http: Http) {
    http.get('/app/components').toPromise()
      .then(response => {debugger;}, error => {debugger;});
   }*/

  ngOnInit() {
  }

}
