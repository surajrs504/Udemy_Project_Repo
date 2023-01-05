import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
member:Member|undefined
galleryOptions:NgxGalleryOptions[]=[]
galleryImages:NgxGalleryImage[]=[]
  constructor(private mems:MemberServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadmember();
    console.log(this.member)

    this.galleryOptions=[
      {
      width:'500px',
      height:'500px',
      imagePercent:100,
        thumbnailsColumns:4,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:false
    }];

    


  }
getimages(){
  if(!this.member) return [];
    const imageUrls=[];
    for(const photo of this.member.photo){
      imageUrls.push({
        small:photo.url,
        medium:photo.url,
        large:photo.url
      })
    }
return imageUrls;

}
  loadmember(){
const username=this.route.snapshot.paramMap.get('username');
if(!username) return;
    this.mems.getMember(username).subscribe({
      next: member=> {
       this.member=member
        this.galleryImages=this.getimages();
      }
    }
    )
  }
}
