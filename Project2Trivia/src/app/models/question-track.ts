export class QuestionTrack {

    constructor(
    public questionID : number,
    public question : String,
    public questionCategory : String,
    public correctCount : number,
    public incorrectCount : number,
    public difficulty : number
    ){};

}
