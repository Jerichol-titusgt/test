import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';
import sampledata from '../login.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
LogId:number =0;
//@Output('LogId') LoginId = new EventEmitter<{idnumber:number}>();
constructor(public router: Router) {}
  
  @Output() IdEvent= new EventEmitter<number>();

  sendId(){
console.log("sent "+ this.LogId);
}

  ngOnInit() {
  }
  title = 'test';
  Users: any = sampledata;
  checker=0;
    
  @ViewChild('passwordinput',{static:true}) passwordinput:ElementRef;

  loginclick(usernameinput: HTMLInputElement, passwordinput:HTMLInputElement){
    for (let obj of this.Users) {
      if(obj["username"]==usernameinput.value && obj['password']==this.passwordinput.nativeElement.value){
        console.log("login success");
        console.log(obj["id"]);
  
              this.LogId=obj["id"];
        this.sendId();
        this.router.navigateByUrl('/dashboard', { state: { firstname:obj["firstname"] , lastname:obj["lastname"] } });
        // window.location.href = '/dashboard';
     this.checker=1;
        break;
      }
        }
        if(this.checker==0){
        console.log('login Failed');}
      
  }
}
