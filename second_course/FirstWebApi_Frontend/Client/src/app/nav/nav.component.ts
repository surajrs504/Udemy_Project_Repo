import { Component, OnInit } from '@angular/core';

import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {

  }
  isLoggedIn: boolean = false;
  data: any = {}
  constructor(private account: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();                                          
  }

  getCurrentUser(){
    this.account.currentuser$.subscribe({
      next:user=> this.isLoggedIn=!!user,
      error:error=>console.log(error)
    })
  }


  login() {
    console.log(this.model);
    this.account.login(this.model).subscribe({
      next: response => {
        this.isLoggedIn = true;
        console.log(response)
      },
      error: () => console.log("some error"),
      complete: () => console.log("data transfer compalete")
    })
  }

  logout(){
    this.account.logout();
    this.isLoggedIn=false;
  }
}
