import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../Services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // @Input() userFromHomeComponent:any;
  @Output() cancelRegister=new EventEmitter(); 
  model:any={}
  constructor(private account:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
this.account.register(this.model).subscribe({
  next: response=>{
    console.log(response)
    this.cancel();
  },
  error: error=>this.toastr.error(error.error),
  complete: ()=>console.log("compelted")
})
  }
  cancel(){
this.cancelRegister.emit(false);
  }
}
