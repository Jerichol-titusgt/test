import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  @ViewChild('passwordinput', { static: true }) passwordinput: ElementRef;

  title = 'test';
  Users: any= [];
  logid = 0;
  display: boolean = false;

  constructor(public router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.getData(this.Users)
   console.log(this.Users);
  }

  loginclick(usernameinput: HTMLInputElement, passwordinput: HTMLInputElement) {
    try {
      this.logid = this.Users.find(x => x.username == usernameinput.value && x.password == this.passwordinput.nativeElement.value)["id"];
      console.log(this.logid);
      this.router.navigateByUrl('/dashboard', { state: { firstname: this.Users[this.logid - 1]["firstname"], lastname: this.Users[this.logid - 1]["lastname"] } });
    } catch (error) {
      console.log('login Failed');
      this.showDialog();
    }
  }

  showDialog() {
    this.display = true;
  }
}
