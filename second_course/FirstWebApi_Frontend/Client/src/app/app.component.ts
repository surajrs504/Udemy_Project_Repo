import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'helllo world';
users:any;
  constructor(private http: HttpClient){

  }
  ngOnInit(){
    console.log("helloo fsfsf ffdfdfdfdccccc");
  this.http.get('https://localhost:5001/Users/users').subscribe({
    next: result=> this.users=result,
    error: error=> console.log("some error occured"),
    complete: ()=> console.log("completed!!")
  })
  }
}
