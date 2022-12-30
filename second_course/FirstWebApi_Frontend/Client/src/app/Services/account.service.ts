import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat';
import { map } from 'rxjs/operators'
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseurl = 'https://localhost:5001/';
  
  private currentUserSource = new BehaviorSubject<User | null>(null);
  
  currentuser$ = this.currentUserSource.asObservable();
  
  constructor(private http: HttpClient) { }


  login(model: any) {
    return this.http.post<User>(this.baseurl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }


  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }



  register(model: any) {
   return this.http.post<User>(this.baseurl + 'account/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })
    )
  }


  logout() {

    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }

}
