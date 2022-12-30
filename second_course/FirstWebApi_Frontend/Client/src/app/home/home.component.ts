import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode=false;
  constructor(private http:HttpClient) { }
  users:any
  ngOnInit(): void {
    this.getuser();
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }

  getuser(){
    console.log("helloo fsfsf ffdfdfdfdccccc");
    this.http.get('https://localhost:5001/Users/users').subscribe({
      next: result=> this.users=result,
      error: error=> console.log("some error occured"),
      complete: ()=> console.log("completed!!")
    })
  }


  cancelRegisterMode(event:any){
this.registerMode=event;
  }

}
