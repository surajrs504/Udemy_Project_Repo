import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {

  baseurl='https://localhost:5000/buggy/';
  validationErrors:string[]=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  get404error(){
    this.http.get(this.baseurl+'not-found').subscribe({
      next:result=>console.log(result),
      error:error=>console.log(error),
      
    })
  }
  get500error(){
    this.http.get(this.baseurl+'server-error').subscribe({
      next:result=>console.log(result),
      error:error=>console.log(error),
      
    })
  }
  get401error(){
    this.http.get(this.baseurl+'auth').subscribe({
      next:result=>console.log(result),
      error:error=>console.log(error),
     
    })
  }
  getBadRequest(){
    this.http.get(this.baseurl+'bad-request').subscribe({
      next:result=>console.log(result),
      error:error=>console.log(error),
    
    })
  }

  unauth(){
    this.http.post('https://localhost:5000/account/register',{}).subscribe({
      next:result=>console.log(result),
      error:error=>{
        console.log(error)
      this.validationErrors=error;
      },
    
    })
  }


}
