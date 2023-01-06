import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
members$:Observable<Member[]> | undefined;
  constructor(private m:MemberServiceService) { }

  ngOnInit(): void {
    this.members$=this.m.getMembers();
  }

 
  }

