
import { Component, ElementRef } from '@angular/core';
import { SelectItem, LazyLoadEvent } from 'primeng/primeng';
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
 })
@Injectable()
export class DashboardComponent {
  show = false
  datasource: any;
  sources: Source[];

  selecteditem: Source;

  items: SelectItem[];
  e: LazyLoadEvent;
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
  totalRecords: number;
  cols: any[];
  loading: boolean;
  brands: SelectItem[];
  data: any;
  fbusers: number = 0;
  twusers: number = 0;
  igusers: number = 0;
  chartbutton: string = "All";

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
      { label: 'Facebook', value: 0 },
      { label: 'Twitter', value: 1 },
      { label: 'Instagram', value: 2 }
    ];
  }

  chartdata(filter: string) {
    if (filter == "All") {
      this.fbusers = 0;
      this.twusers = 0;
      this.igusers = 0;
      for (let obj of this.datasource) {
        if (obj["source"] == 0) {
          this.fbusers++;
        }

        else if (obj["source"] == 1) {
          this.twusers++;
        }
        else {
          this.igusers++;
        }

      }

      this.data = {
        labels: ['Facebook', 'Twitter', 'Instagram'],
        datasets: [
          {
            data: [this.fbusers, this.twusers, this.igusers],
            backgroundColor: [
              "#3b5998",
              "#00acee",
              "#E1306C"
            ],
            hoverBackgroundColor: [
              "#3b5998",
              "#00acee",
              "#E1306C"
            ]
          }]
      };
    }

    else {
      this.fbusers = 0;
      this.twusers = 0;
      this.igusers = 0;
      for (let obj of this.Users) {
        if (obj["source"] == 0) {
          this.fbusers++;
        }

        else if (obj["source"] == 1) {
          this.twusers++;
        }
        else {
          this.igusers++;
        }

      }

      this.data = {
        labels: ['Facebook', 'Twitter', 'Instagram'],
        datasets: [
          {
            data: [this.fbusers, this.twusers, this.igusers],
            backgroundColor: [
              "#3b5998",
              "#00acee",
              "#E1306C"
            ],
            hoverBackgroundColor: [
              "#3b5998",
              "#00acee",
              "#E1306C"
            ]
          }]
      };

    }

  }


  ngOnInit() {
    this.name = history.state.firstname + history.state.lastname;
    console.log(this.sources[0]["name"]);
    this.loading = true;
    this.datasource = this.Users
    this.totalRecords = this.datasource.length;
    this.chartdata(this.chartbutton);
  }

  load(event: LazyLoadEvent) {
    this.e = event;
    console.log("Event: " + event);
    this.loading = true;
    setTimeout(() => {
      if (this.datasource) {
        this.Users = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
        this.chartdata(this.chartbutton);
      }
    }, 1000);
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

    this.datasource.push({
      "id": this.Users.length + 1, "firstname": this.firstnameinput,
      "lastname": this.lastnameinput, "Country": this.countryinput, "Nationality": this.nationalityinput,
      "Company": this.companyinput, "Designation": this.designationinput, "Workexp": this.workinput,
      "cv": this.Cvinput, "source": this.selecteditem.code
    });

    console.log(this.Users.length);
    this.totalRecords = this.datasource.length;
    this.load(this.e);
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

  chartfilter() {
    if (this.chartbutton == "All") {
      this.chartbutton = "By tablepage";
      this.chartdata(this.chartbutton);
    }
    else {
      this.chartbutton = "All";
      this.chartdata(this.chartbutton);
    }
  }

}
