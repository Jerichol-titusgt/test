import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const localUrl = 'assets/data/login.json';
@Injectable({
    providedIn:'root'
})
export class ApiService{
    constructor(private httpClient : HttpClient){}

    getUrl(){
        return this.httpClient.get(localUrl);
    }

    getData(Users: any[]) {
        this.getUrl()
          .subscribe(data => {
            for (const d of (data as any)) {
              Users.push({
                id: d.id,
                username: d.username,
                password: d.password,
                firstname: d.firstname,
                lastname: d.lastname,
                Country: d.Country,
                Nationality: d.Nationality,
                Company: d.Company,
                Designation: d.Designation,
                Workexp: d.Workexp,
                cv: d.cv,
                source: d.source
              });
            }
          });
      }
}