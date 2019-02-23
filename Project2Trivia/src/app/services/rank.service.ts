import { Injectable } from "@angular/core";

@Injectable()
export class RankService {

    constructor(){}

    //generates a rank badge depending on user's high score
    getRank(highscore: number){

        switch (true) {
            //bronze rank
            case (highscore < 1000): 
                return "BRONZE";
                break;
            //silver rank
            case (highscore >= 1000 && highscore < 1500):
                return "SILVER";
                break;
            //gold rank
            case (highscore >= 1500 && highscore < 2000):
                return "GOLD";
                break;
            //platinum rank
            case (highscore >= 2000 && highscore < 2500):
                return "PLATINUM";
                break;
            //diamond rank
            case (highscore >= 2500 && highscore < 3000):
                return "DIAMOND";
                break; 
            //master rank
            case (highscore >= 3000 && highscore < 3500):
                return "MASTER";
                break;
            //grandmaster rank
            case (highscore >= 3500):
                return "GRANDMASTER";
                break; 
            default:
                return "Issue loading rank badge!";
                break;
        }
        
    }

}