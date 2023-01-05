import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router, private toastr : ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=>{
        if(err){
          switch(err.status){
            case 400:
              if(err.error.errors){
                const modelStateErrors=[];
                for(const key in err.error.errors){
                  if(err.error.errors[key]){
                    modelStateErrors.push(err.error.errors[key]);
                  }
                }
                throw modelStateErrors.flat();
              }
              else{
                this.toastr.error(err.error, err.status.toString());
              }
              break;                           
              case 401:   this.toastr.error('unauthorised', err.status.toString());
              break;

              case 404:   this.router.navigateByUrl('/not-found')
              break;

              case 500:   const navigationExtra:NavigationExtras={state: {err:err.error}};
              this.router.navigateByUrl('/server-error',navigationExtra);
            break;
            default: this.toastr.error('something unexceptec went wrong');
            console.log(err);
            break;
          }
        
        }  throw err;
      })
    );
  }
}
