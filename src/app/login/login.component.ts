import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import sampledata from '../login.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {
  }
  title = 'test';
  Users: any = sampledata;
  logid = 0;

  @ViewChild('passwordinput', { static: true }) passwordinput: ElementRef;

  loginclick(usernameinput: HTMLInputElement, passwordinput: HTMLInputElement) {
    console.log(this.logid);
    try {
      this.logid = this.Users.find(x => x.username == usernameinput.value && x.password == this.passwordinput.nativeElement.value)["id"];
      console.log(this.logid);
      this.router.navigateByUrl('/dashboard', { state: { firstname: this.Users[this.logid - 1]["firstname"], lastname: this.Users[this.logid - 1]["lastname"] } });
    } catch (error) {
      console.log('login Failed');
    }


  }
}
