
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode=false;
  constructor() { }
  users:any
  ngOnInit(): void {
    
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }

  


  cancelRegisterMode(event:any){
this.registerMode=event;
  }

}
