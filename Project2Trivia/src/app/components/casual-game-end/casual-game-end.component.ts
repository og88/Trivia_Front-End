import { Component, OnInit } from '@angular/core';
import { CasualGameComponent } from '../casual-game/casual-game.component';

@Component({
  selector: 'app-casual-game-end',
  templateUrl: './casual-game-end.component.html',
  styleUrls: ['./casual-game-end.component.css']
})
export class CasualGameEndComponent implements OnInit {

  //to store recent game stats
  score: number;
  right: number;
  wrong: number;
  answered: number;

  constructor(public casualGame: CasualGameComponent) { }

  ngOnInit() {

    var currentGame = JSON.parse(localStorage.getItem("currentGame"));

    this.answered = currentGame.answered;
    this.score = currentGame.score;
    this.right = currentGame.right;
    this.wrong = currentGame.wrong;

  }

  clearGameStats(){
    localStorage.removeItem("currentGame");
  }

}
