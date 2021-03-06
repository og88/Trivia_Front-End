import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  title: string = "Trivia Hero!";
  user : User = JSON.parse(localStorage.getItem('currentUser'));

  userHighscore: number = this.user.highScore;
  rank: string = null;
  level: number;
  

  constructor(private _rankService: RankService) { }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.rank = this._rankService.getRank(this.userHighscore);
    this.level = Math.ceil(this.user.experience/1000);

  }

  logout(){
    //clear local store when logout button is clicked
    localStorage.clear();
  }

}
