import { Injectable } from '@angular/core';
import{NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner'
@Injectable({
  providedIn: 'root'
})
export class BusyService {
busyRequesCount=0;
  constructor(private spinner:NgxSpinnerService) { }

  busy(){
    this.busyRequesCount++;
    this.spinner.show(undefined,{
      type:'line-scale-party',
      bdColor:'rgba(255,255,255,0)',
      color:'#333333'
    })
  }

  idle(){
    this.busyRequesCount--;
    if(this.busyRequesCount<=0){
      this.busyRequesCount=0;
      this.spinner.hide();
    }
  }

}
