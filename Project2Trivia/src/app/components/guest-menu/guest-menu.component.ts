import { Component, OnInit } from '@angular/core';
import { LayoutImagesService } from 'src/app/services/layout-images.service';
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


  constructor(private _layoutImages: LayoutImagesService) {}

  ngOnInit() {
  }

}
