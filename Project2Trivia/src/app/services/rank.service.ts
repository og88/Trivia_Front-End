import { Injectable } from "@angular/core";

@Injectable()
export class RankService {

    constructor(){}

    //generates a rank badge depending on user's high score
    getRank(highscore: number){

        switch (true) {
            //bronze rank
            case (highscore < 1000): 
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852836/trivia-hero/ranks/Bronze.png";
                break;
            //silver rank
            case (highscore >= 1000 && highscore < 2000):
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852838/trivia-hero/ranks/Silver.png";
                break;
            //gold rank
            case (highscore >= 2000 && highscore < 3000):
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852839/trivia-hero/ranks/Gold.png";
                break;
            //platinum rank
            case (highscore >= 3000 && highscore < 4000):
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852839/trivia-hero/ranks/Platinum.png";
                break;
            //diamond rank
            case (highscore >= 4000 && highscore < 5000):
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852839/trivia-hero/ranks/Diamond.png";
                break; 
            //master rank
            case (highscore >= 5000 && highscore < 6000):
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852841/trivia-hero/ranks/Master.png";
                break;
            //grandmaster rank
            case (highscore >= 6000):
                return "https://res.cloudinary.com/dm1h6zjdu/image/upload/v1550852839/trivia-hero/ranks/Grandmaster.png";
                break; 
            default:
                return "Issue loading rank badge!";
                break;
        }
        
    }

}