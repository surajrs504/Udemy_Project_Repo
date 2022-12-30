import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './Services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'helllo world';
users:any;
  constructor(private http: HttpClient, private acc:AccountService){

  }
  ngOnInit(){
  // this.getuser();
   this.setCurrentUser();
  }

  // getuser(){
  //   console.log("helloo fsfsf ffdfdfdfdccccc");
  //   this.http.get('https://localhost:5001/Users/users').subscribe({
  //     next: result=> this.users=result,
  //     error: error=> console.log("some error occured"),
  //     complete: ()=> console.log("completed!!")
  //   })
  // }
  setCurrentUser(){
    const userString =localStorage.getItem('user');
    if(!userString ) return;
    const user:User=JSON.parse(userString);
    this.acc.setCurrentUser(user);
  }
}
