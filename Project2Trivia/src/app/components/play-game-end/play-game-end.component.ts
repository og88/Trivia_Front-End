import { Component, OnInit } from '@angular/core';
import { PlayGameComponent } from '../play-game/play-game.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-play-game-end',
  templateUrl: './play-game-end.component.html',
  styleUrls: ['./play-game-end.component.css']
})
export class PlayGameEndComponent implements OnInit {

user : User = JSON.parse(localStorage.getItem('currentUser'));

userHighscore: number = this.user.highScore;

//to store recent game stats
score: number;
right: number;
wrong: number;
answered: number;
level: number;

constructor(public playGame: PlayGameComponent) { }

ngOnInit() {

  var currentGame = JSON.parse(localStorage.getItem("currentGame"));
  this.level = Math.ceil(this.user.experience/1000);


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
