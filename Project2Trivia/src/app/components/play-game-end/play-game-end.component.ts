import { Component, OnInit } from '@angular/core';
import { PlayGameComponent } from '../play-game/play-game.component';

@Component({
  selector: 'app-play-game-end',
  templateUrl: './play-game-end.component.html',
  styleUrls: ['./play-game-end.component.css']
})
export class PlayGameEndComponent implements OnInit {

//to store recent game stats
score: number;
right: number;
wrong: number;
answered: number;

constructor(public playGame: PlayGameComponent) { }

ngOnInit() {

  var currentGame = JSON.parse(localStorage.getItem("currentGame"));

  this.answered = currentGame.answered;
  this.score = currentGame.score;
  this.right = currentGame.right;
  this.wrong = currentGame.wrong;

  this.clearGameStats();
}

clearGameStats(){
  localStorage.removeItem("currentGame");
}

}
