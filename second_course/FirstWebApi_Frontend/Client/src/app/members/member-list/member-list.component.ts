import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
members:Member[]=[];
  constructor(private m:MemberServiceService) { }

  ngOnInit(): void {
    this.loadMembers()
  }

  loadMembers(){
    this.m.getMembers().subscribe({
      next: members=>this.members=members,
      error:error=>console.log("somthing went wrong in loadmembers method")
    })
  }

}
