
import {Component, ElementRef} from '@angular/core';
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
export class DashboardComponent{
  show=false
    sources: Source[];

    selecteditem: Source;

    items: SelectItem[];

    item: string;
    fname="";
    lname="";
    firstnameinput="";
    lastnameinput="";
    countryinput="";
    nationalityinput="";
    companyinput="";
    designationinput="";
    workinput="";
    Cvinput=null;
    Source=null;
    Users: any = sampledata;
    id:number;
    cols: any[];
    constructor(public router: Router, private _eref: ElementRef) {
      
        this.sources = [
            {name: 'Facebook', code: '0'},
            {name: 'Twitter', code: '1'},
            {name: 'Instagram', code: '2'},
        ];

        
    }


    ngOnInit() {
      console.log(history.state.firstname);
      console.log(this.sources[0]["name"]);
      this.fname=history.state.firstname;
      this.lname=history.state.lastname;
  }
    
    onclick(){
      console.log("subbed");
      console.log(this.Cvinput);
      this.Users.push({"id":this.Users.length+1, "firstname":this.firstnameinput,
    "lastname":this.lastnameinput,"Country":this.countryinput,"Nationality":this.nationalityinput,
  "Company":this.companyinput,"Designation":this.designationinput,"Workexp":this.workinput,
"cv":this.Cvinput,"source":this.selecteditem.code});
console.log(this.Users);
} 
    reset(){
      this.firstnameinput="";
    this.lastnameinput="";
    this.countryinput="";
    this.nationalityinput="";
    this.companyinput="";
    this.designationinput="";
    this.workinput="";
    this.Cvinput=null;
    this.selecteditem=null;
    }

 datapanel(num){
   if(num!=0){
    console.log(num);
    this.show =true;
    if(this.show==true){
     for (let obj of this.Users) {
  if(obj["id"]==num){
   this.firstnameinput=obj["firstname"];
   this.lastnameinput=obj["lastname"];
   this.countryinput=obj["Country"];
   this.nationalityinput=obj["Nationality"];
   this.companyinput=obj["Company"];
   this.designationinput=obj["Designation"];
   this.workinput=obj["Workexp"];
   this.Cvinput=null;
   console.log(obj["source"]);
   this.selecteditem=this.sources[obj["source"]];
  }   
    }
  }
   }
   else{
    this.show=false;
   }
}

onClickout(event) {
  if (!this._eref.nativeElement.contains(event.target)) // or some similar check
  this.datapanel(0);
}
}
