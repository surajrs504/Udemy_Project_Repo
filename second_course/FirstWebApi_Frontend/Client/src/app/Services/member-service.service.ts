import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  baseUrl = environment.apiUrl;
    members: Member[]=[];
  constructor(private http: HttpClient) { }

  getMembers():Observable<Member[]> {
    if(this.members.length>0) return of(this.members);
    
    return this.http.get<Member[]>(this.baseUrl+'Users/user').pipe(map(
      mem=>{
        this.members=mem;
        return mem;
      }
    ))

   
  }

  getMember( username:string){
    const member=this.members.find(x=>x.name===username);
        if(member) return of(member);

      return this.http.get<Member>(this.baseUrl+'Users/'+username);
  }
  // getHttpOptions() {
  //   const userString = localStorage.getItem('user');
  //   if (!userString) return;
  //   const user = JSON.parse(userString);
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization:'Bearer ' + user.token
  //     })
  //   };

  updatemember(member:Member){
   return this.http.put(this.baseUrl+'Users',member).pipe(map(
    ()=>{
        const index=this.members.indexOf(member);
        this.members[index]={...this.members[index],...member} // ...(spread operator) spreads the details of that perticular index and updates it with other spreaded element
    }
   ));
   }

}
