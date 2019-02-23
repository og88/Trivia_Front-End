import { Component, OnInit } from '@angular/core';
//imported models
import { Currentgame } from '../../models/currentgame';
import {QuestionTrack} from '../../models/question-track';
import { User } from 'src/app/models/user';
//imported services
import {QuestionService} from '../../services/question.service';
import { RankService } from 'src/app/services/rank.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface theQuestions {
  theClues: Object
}

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  user : User = JSON.parse(localStorage.getItem('currentUser'));

  userLevel: number;
  
  userHighscore: number = this.user.highScore;
  rank: string = null;
  level: number;


  //title shown on page
  title: string = "Trivia Hero!";

  //tracks current game progress
  totalScore: number;
  totalAnswered: number;
  totalRight: number;
  totalWrong: number;
  healthPoints: number;
  healthBar: string[] = new Array();
  
  //track question stats
  question: string;
  wasRight: boolean;
  questionStats: any[] = new Array();

  //holds info for questions
  questions = {};
  questionsArr = [];
  questionsArrLength: number;
  questionsArrRandomIndex: number;
  questionsArrIndex: number;
  questionsArrClue: string;
  questionsArrAnswer: string;
  questionAnswerMin: string; //minimize the results of the clue's answer 
  questionsArrValue: number;
  questionsArrCategory: string;
  userAnswer: string;
  value: string;

  constructor(private _rankService: RankService, private _questionService: QuestionService, public router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.rank = this._rankService.getRank(this.userHighscore);

    this.userLevel = Math.ceil(this.user.experience / 1000);

    this.questions = this._questionService.getQuestion().subscribe(data => {
      this.questionsArr = data.clues;
      //get first question on startup
      this.getNewQuestion();
    });

    //set current game status to 0
    this.totalScore = 0;
    this.totalAnswered = 0;
    this.totalRight = 0;
    this.totalWrong = 0;
    this.healthPoints = 5;
    
    //initially store the array with hearts
    for(let i=0; i < this.healthPoints; i++){
      this.healthBar.push("❤");
    }

    
  }

  //get a new question
  getNewQuestion() {


    this.questionsArrLength = this.questionsArr.length - 1; //get array length
    this.questionsArrRandomIndex = Math.floor(Math.random() * this.questionsArrLength); //generate random number
   
    //get question according to the random index
    this.questionsArrClue = this.questionsArr[this.questionsArrRandomIndex].question;
    this.questionsArrIndex = this.questionsArr[this.questionsArrRandomIndex].id;
    this.questionsArrCategory = this.questionsArr[this.questionsArrRandomIndex].category_id;
    //console.log(JSON.stringify(this.questionsArr[this.questionsArrRandomIndex]));

    //if question contains 'video clue' remove it from the array and get a new question
    if(!this.questionsArrClue.includes("video clue")){

      //grab answer, remove <i> tags if present, turn to all lowercase, get rid of whitespace
      this.questionsArrAnswer = this.questionsArr[this.questionsArrRandomIndex].answer;
      if(this.questionsArrAnswer.includes("<i>") || this.questionsArrAnswer.includes("</i>")){
        this.questionsArrAnswer = this.questionsArrAnswer.replace("<i>", "");
        this.questionsArrAnswer = this.questionsArrAnswer.replace("</i>", "");
      }
      this.questionAnswerMin = this.questionsArrAnswer.toLocaleLowerCase();
      console.log("Turn answer to lowercase: " + this.questionAnswerMin);
      //if clue contains an article, remove it
      if(this.questionsArrAnswer.includes("the ")){
        this.questionsArrAnswer = this.questionsArrAnswer.replace("the ", "");
      }
      if(this.questionsArrAnswer.includes("an ")){
        this.questionsArrAnswer = this.questionsArrAnswer.replace("an ", "");
      }
      if(this.questionsArrAnswer.includes("a ")){
        this.questionsArrAnswer = this.questionsArrAnswer.replace("a ", "");
      }
      this.questionAnswerMin = this.questionAnswerMin.replace(/[^A-Z0-9]+/ig, "");
      //console.log("Remove whitespace from answer: " + this.questionAnswerMin);

      //store the value of the clue value
      this.questionsArrValue = this.questionsArr[this.questionsArrRandomIndex].value;
      //if pulled question doesn't have a value, assign it a default value of 100
      if(this.questionsArrValue == 0 || this.questionsArrValue == null){
        this.questionsArrValue = 100;
      }
      //remove current question from array to avoid duplicates
      this.questionsArr.splice(this.questionsArrRandomIndex, 1);
    

      //console.log("The current index is " + this.questionsArrRandomIndex);
     // console.log("The current question is: " + this.questionsArrClue);
      //console.log("The current answer is: " + this.questionsArrAnswer);
      //console.log("The current value is: " + this.questionsArrValue);
      //console.log("The current array length is: " + this.questionsArr.length);
      //console.log("Your current HP: " + this.healthPoints);


    } else {
      //remove current question from array
      this.questionsArr.splice(this.questionsArrRandomIndex, 1);
      this.getNewQuestion();
    }
    
  }

  //check answer
  confirmAnswer() {
    //assign user input to variable
    this.userAnswer = this.value;
    //if the user has entered anything in the input
    if(this.value != "" && this.value != null){
      //change user input to lowercase and get rid of whitespace and special characters
      this.userAnswer = this.userAnswer.toLocaleLowerCase();
      //if clue contains an article, remove it
      if(this.userAnswer.includes("the ")){
        this.userAnswer = this.userAnswer.replace("the ", "");
      }
      if(this.userAnswer.includes("an ")){
        this.userAnswer = this.userAnswer.replace("an ", "");
      }
      if(this.userAnswer.includes("a ")){
        this.userAnswer = this.userAnswer.replace("a ", "");
      }
      this.userAnswer = this.userAnswer.replace(/[^A-Z0-9]+/ig, "");

      //if clue answer is equal to user input answer, mark right, else mark wrong
      if(this.userAnswer.includes(this.questionAnswerMin) || this.questionAnswerMin.includes(this.userAnswer)){
        //console.log("Snitch, you guessin'!...... you was right.");
        //increase total score, total answered, and total right
        this.totalScore += this.questionsArrValue;
        this.totalAnswered += 1;
        this.totalRight += 1;
        //add question to question statistics array as right
        this.questionStats.push(new QuestionTrack(this.questionsArrIndex, this.questionsArrClue,this.questionsArrCategory, 1, 0, this.questionsArrValue));
        //console.log("Total Score: " + this.totalScore);
       // console.log("Total Answered: " + this.totalAnswered);
       // console.log("Total Right: " + this.totalRight);
       // console.log("Total Wrong: " + this.totalWrong);
      } else {
        //console.log("You is wrong, fam...");
        //increase total answered, total wrong; decrease healthPoints
        this.totalAnswered += 1;
        this.totalWrong += 1;
        this.healthPoints -= 1;
        //empty health bar array and repopular with the new total of hearts
        this.healthBar = [];
        for(let i=0; i < this.healthPoints; i++){
          this.healthBar.push("❤");
        }
        //add question to question statistics array as wrong
        this.questionStats.push(new QuestionTrack(this.questionsArrIndex, this.questionsArrClue,this.questionsArrCategory, 0, 1, this.questionsArrValue));
        var score = this.totalScore; var right = this.totalRight; var wrong = this.totalWrong; var answered = this.totalAnswered;
       // console.log("The stored variables are " + score + ", " + right + ", " + wrong + ", " + answered);
        //if health reaches 0, create currentgame object and store current game stats inside
        //store object in localStorage to be used in the next component
        if(this.healthPoints <= 0){
          var gamestats = new Currentgame(score, right, wrong, answered);
          localStorage.setItem("currentGame", JSON.stringify(gamestats));
          //store question stats in a local storage array of objects
          //localStorage.setItem("questionStats", JSON.stringify(this.questionStats));
          //send POST request to update database with question stats
          //redirect to play-game-end component
          this.router.navigate(['/play-game-end']);
        }
        //console.log("Total Score: " + this.totalScore);
        //console.log("Total Answered: " + this.totalAnswered);
        //console.log("Total Right: " + this.totalRight);
        //console.log("Total Wrong: " + this.totalWrong);      
      }

      //after user input, clear user input
      this.value = "";
      if(this.healthPoints <= 0){
        this.UpdateQuestion();
        var score = this.totalScore; var right = this.totalRight; var wrong = this.totalWrong; var answered = this.totalAnswered;
        var gamestats = new Currentgame(score, right, wrong, answered);
        localStorage.setItem("currentGame", JSON.stringify(gamestats));
        //store question stats in a local storage array of objects
        //localStorage.setItem("questionStats", JSON.stringify(this.questionStats));
        //send POST request to update database with question stats
        //redirect to play-game-end component
        this.router.navigate(['/play-game-end']);
      }
      //get new question
      this.getNewQuestion();

      //else if user does not enter anything as an answer
    } else {
     // console.log("You've been attacked!");
      //decrease healthPoints
      this.healthPoints -= 1;
      this.healthBar = [];
      for(let i=0; i < this.healthPoints; i++){
        this.healthBar.push("❤");
      }
      //if health reaches 0, create currentgame object and store current game stats inside
      //store object in localStorage to be used in the next component
      if(this.healthPoints <= 0){
        this.UpdateQuestion();
        var score = this.totalScore; var right = this.totalRight; var wrong = this.totalWrong; var answered = this.totalAnswered;
        var gamestats = new Currentgame(score, right, wrong, answered);
        localStorage.setItem("currentGame", JSON.stringify(gamestats));
        //store question stats in a local storage array of objects
        //localStorage.setItem("questionStats", JSON.stringify(this.questionStats));
        //send POST request to update database with question stats
        //redirect to play-game-end component
        this.router.navigate(['/play-game-end']);
      }
      //if there are no more questtion in the array
      if(this.questionsArr.length == 0){
        this.UpdateQuestion();
        var score = this.totalScore; var right = this.totalRight; var wrong = this.totalWrong; var answered = this.totalAnswered;
        var gamestats = new Currentgame(score, right, wrong, answered);
        localStorage.setItem("currentGame", JSON.stringify(gamestats));
        this.router.navigate(['/play-game-end']);
      }
      this.getNewQuestion();
    } 
  } 

  //configUrl = 'http://localhost:8080/project2/rest/question/counter';
  configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/question/counter';

  UpdateQuestion(){
    //console.log("End of GAME \n"+JSON.stringify(this.questionStats));

    this.http.post(this.configUrl, this.questionStats)
        .subscribe(Response => {
           // console.log(Response);
        });

      let tempU : User = JSON.parse(localStorage.getItem('currentUser'));
      tempU.username = this.user.username;

        tempU.highScore = this.totalScore;
        tempU.experience = Math.ceil(this.totalScore/(this.totalRight + 1));

        this.configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/user/score/update';
        //this.configUrl = 'http://localhost:8080/project2/rest/user/score/update';

        this.http.post(this.configUrl, tempU)
        .subscribe(Response => {
            console.log(Response);
            if(this.user.highScore < this.totalScore){
              this.user.highScore = this.totalScore;
            }
            this.user.experience += tempU.experience;
              localStorage.removeItem("currentUser");
              localStorage.setItem('currentUser', JSON.stringify(this.user));
        });
  }
  leaveGame(){
    
  }
}
