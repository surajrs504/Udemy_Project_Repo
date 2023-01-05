import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private acc:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   this.acc.currentuser$.pipe(take(1)).subscribe({
    next:user=>{
      if(user){
        request=request.clone({
          setHeaders:{
            Authorization:`Bearer ${user.token}`
          }
        })
      }
    }
   })
   
   
    return next.handle(request);
  }
}
