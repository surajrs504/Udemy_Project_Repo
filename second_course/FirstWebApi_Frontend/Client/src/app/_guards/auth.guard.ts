import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private account:AccountService, private toastr:ToastrService){}
  canActivate(): Observable<boolean>  {
    return this.account.currentuser$.pipe(
      map( user=>{
        if(user) return true;
        else{
          this.toastr.error("you cant pass");
          return false;
        }
      })
    );
  }
  
}
