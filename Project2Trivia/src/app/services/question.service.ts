import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'http://jservice.io/api/category?id=309';
const httpOptions = {
    headers: new HttpHeaders({'Content': 'application/json'})
};

@Injectable()
export class QuestionService {

    constructor(private http: HttpClient){}

    //Uses http.get() to load data from a single API endpoint
    getQuestion(){
        return this.http.get<any>(endpoint)
        
    }

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

}