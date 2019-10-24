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
  checker = 0;

  @ViewChild('passwordinput', { static: true }) passwordinput: ElementRef;

  loginclick(usernameinput: HTMLInputElement, passwordinput: HTMLInputElement) {
    for (let obj of this.Users) {
      if (obj["username"] == usernameinput.value && obj['password'] == this.passwordinput.nativeElement.value) {
        console.log("login success");
        console.log(obj["id"]);

        this.router.navigateByUrl('/dashboard', { state: { firstname: obj["firstname"], lastname: obj["lastname"] } });
        this.checker = 1;
        break;
      }
    }
    if (this.checker == 0) {
      console.log('login Failed');
    }

  }
}
