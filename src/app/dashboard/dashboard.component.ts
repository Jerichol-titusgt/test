
import { Component, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import sampledata from '../login.json';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Source {
  name: string,
  code: string
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    '(document:click)': 'onClickout($event)',
  }
})
@Injectable()
export class DashboardComponent {
  show = false
  sources: Source[];

  selecteditem: Source;

  items: SelectItem[];

  item: string;
  name = "";
  firstnameinput = "";
  lastnameinput = "";
  countryinput = "";
  nationalityinput = "";
  companyinput = "";
  designationinput = "";
  workinput = "";
  Cvinput = null;
  Source = null;
  Users: any = sampledata;
  id: number;
  cols: any[];
  brands: SelectItem[];

  constructor(public router: Router, private _eref: ElementRef) {

    this.sources = [
      { name: 'Facebook', code: '0' },
      { name: 'Twitter', code: '1' },
      { name: 'Instagram', code: '2' },
    ];

    this.cols = [
      { field: 'firstname', header: 'First Name' },
      { field: 'lastname', header: 'Last Name' },
      { field: 'Country', header: 'Country' },
      { field: 'Nationality', header: 'Nationality' },
      { field: 'Company', header: 'Company' },
      { field: 'Designation', header: 'Designation' },
      { field: 'Workexp', header: 'Work Exp' },
      { field: 'CV', header: 'CV' },
      { field: 'source', header: 'Data Source' }
  ];

  this.brands = [
    { label: 'All Sources', value: null },
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Twitter', value: 'Twitter' },
    { label: 'Instagram', value: 'Instagram' }
  ];

  }


  ngOnInit() {
    this.name=history.state.firstname + history.state.lastname;
    console.log(this.name);
    console.log(this.Users.find(x => x.username === "user" && x.password === "pass")["id"]);
  }

  onclick() {
    console.log("subbed");
    console.log(this.Cvinput);
    this.Users.push({
      "id": this.Users.length + 1, "firstname": this.firstnameinput,
      "lastname": this.lastnameinput, "Country": this.countryinput, "Nationality": this.nationalityinput,
      "Company": this.companyinput, "Designation": this.designationinput, "Workexp": this.workinput,
      "cv": this.Cvinput, "source": this.selecteditem.code
    });
    console.log(this.Users);
  }
  reset() {
    this.firstnameinput = "";
    this.lastnameinput = "";
    this.countryinput = "";
    this.nationalityinput = "";
    this.companyinput = "";
    this.designationinput = "";
    this.workinput = "";
    this.Cvinput = null;
    this.selecteditem = null;
  }

  datapanel(num) {
    if (num != 0) {
      console.log(num);
      this.show = true;
      for (let obj of this.Users) {
        if (obj["id"] == num) {
          this.firstnameinput = obj["firstname"];
          this.lastnameinput = obj["lastname"];
          this.countryinput = obj["Country"];
          this.nationalityinput = obj["Nationality"];
          this.companyinput = obj["Company"];
          this.designationinput = obj["Designation"];
          this.workinput = obj["Workexp"];
          this.Cvinput = null;
          console.log(obj["source"]);
          this.selecteditem = this.sources[obj["source"]];
        }
      }
    }
    else {
      this.show = false;
    }
  }

  onClickout(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
      this.datapanel(0);
  }
}
