import { Component, OnInit } from '@angular/core';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  title: string = "Trivia Hero!";

  username: string;
  userHighscore: number;
  rank: string = null;

  constructor(private _rankService: RankService) { }

  ngOnInit() {

    this.username = "OverwatchGod";
    this.userHighscore = 3000;
    this.rank = this._rankService.getRank(this.userHighscore);

  }

  logout(){
    //clear local store when logout button is clicked
    localStorage.clear();
  }

}
