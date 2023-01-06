import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model:any={};
@Output() cancelRegister=new EventEmitter(); 
  constructor(private account:AccountService, private route:Router) { }

  ngOnInit(): void {
  }
login(){
  console.log(this.model);
  this.account.login(this.model).subscribe({
    next: response => {
      this.route.navigateByUrl("/members");
    },
    error: () => console.log("some error"),
    complete: () => console.log("data transfer compalete")
  })
}
cancel(){
  this.cancelRegister.emit(false);
    }

    
}
