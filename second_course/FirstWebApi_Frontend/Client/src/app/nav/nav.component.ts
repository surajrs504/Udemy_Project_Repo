import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/public_api';
import { Observable, of } from 'rxjs';

import { AccountService } from '../Services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {

  }
 
currentUser$:Observable<User | null>=of(null);

  data: any = {}
  
  constructor(public account: AccountService, private route:Router) { }

  ngOnInit(): void {
   this.currentUser$=this.account.currentuser$;                                         
  }

  // getCurrentUser(){
  //   this.account.currentuser$.subscribe({
  //     next:user=> console.log(user),
  //     error:error=>console.log(error)
  //   })
  // }


  login() {
    
    console.log(this.model);
    this.account.login(this.model).subscribe({
      next: response => {
        this.route.navigateByUrl("/members");
      },
      error: () => console.log("some error"),
      complete: () => console.log("data transfer compalete")
    })
  }

  logout(){
    
    this.route.navigateByUrl("/");
    this.account.logout();
    
  }

  redirect(){
    if(this.account.currentuser$){this.route.navigateByUrl("/members")}
    else{
      this.route.navigateByUrl("/")
    }
    
  }
}
