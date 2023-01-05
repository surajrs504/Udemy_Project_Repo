import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { AccountService } from 'src/app/Services/account.service';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
@ViewChild("editForm") editForm:NgForm|undefined
@HostListener('window:beforeunload',['$event']) unloadNotification($event:any){
  if(this.editForm?.dirty){
    $event.returnValue=true;
  }
}

  member:Member|undefined;
  user:User|null = null;
  constructor(private acc:AccountService, private mem:MemberServiceService, private toastr:ToastrService) { 

    this.acc.currentuser$.pipe(take(1)).subscribe({
      next:user=>this.user=user
    })

  }

  ngOnInit(): void {
    this.loadmember();
    
  }
loadmember(){
  if(!this.user) return;

  this.mem.getMember(this.user.username).subscribe({
    next:member=>this.member=member
  })
;
}

update(){
  console.log(this.member);
  this.toastr.success("profile updated");
  this.editForm?.reset(this.member);
}

}
