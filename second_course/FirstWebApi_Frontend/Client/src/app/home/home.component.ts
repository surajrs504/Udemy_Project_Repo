
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode:number=0;
  constructor() { }
  users:any
  ngOnInit(): void {
    
  }

  registerToggle(){
    this.registerMode=1;
  }

  


  cancelRegisterMode(event:any){
this.registerMode=0;
  }


      login(){
        this.registerMode=2;
      }
}
