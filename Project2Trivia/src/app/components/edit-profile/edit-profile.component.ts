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
  //configUrl = 'http://localhost:8085/project2/rest/user/update'
  onEdit(){


    const newLocal = this;
    //console.log('User name ' + newLocal.editObject.username + ' password ' + newLocal.editObject.password + ' email ' + newLocal.editObject.email + 'Old User name' + JSON.parse(localStorage.currentUser).username);
    if(newLocal.editObject.password !=''){
      
      //console.log(this.editObject);
      this.http.post<User>(this.configUrl, newLocal.editObject)
      .subscribe(Response => {
        if(Response != null){
          
          let temp : User = JSON.parse(localStorage.getItem('currentUser'));
          temp.username = newLocal.editObject.username;
          temp.email = newLocal.editObject.email;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(temp));
         // console.log(Response);
         // console.log('object', this.editObject);
          //console.log('localstorage', localStorage.getItem('currentUser'));
          this.router.navigate(['/main-menu']);

        }
      });
    } else {
      //console.log("failed")
    }
  }
}
