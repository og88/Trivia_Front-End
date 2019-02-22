import { Component, OnInit, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
@Injectable()
export class EditProfileComponent implements OnInit {

  title: string = "Edit Profile";

  editObject= {
    username : JSON.parse(localStorage.currentUser).username,
    password : '',
    email: JSON.parse(localStorage.currentUser).email,
    tempUsername : JSON.parse(localStorage.currentUser).username
  }

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit() {
  }
  configUrl = 'http://ec2-3-17-244-111.us-east-2.compute.amazonaws.com:8080/project2/rest/user/update'

  onEdit(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods" : "GET, OPTIONS, HEAD, PUT, POST"
      })
    };

    const newLocal = this;

    if(newLocal.editObject.password !=''){
      console.log('User name ' + newLocal.editObject.username + ' password ' + newLocal.editObject.password + ' email ' + newLocal.editObject.email + 'Old User name' + JSON.parse(localStorage.currentUser).username);
      console.log(this.editObject);
      this.http.post<User>(this.configUrl, newLocal.editObject, httpOptions)
      .subscribe(Response => {
        //if(Response != null){
          console.log(Response);
        //}
      });
    } else {
      console.log("failed")
    }
  }
}
