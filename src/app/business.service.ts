import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/thief';

  constructor(private http: HttpClient) { }

  addthief(Name, City, Crime) {
    const obj = {
      Name: Name,
      City: City,
      Crime: Crime
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => alert('Congratulations, New Thief is Added'));
  }

  getthief() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editthief(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updatethief(Name, City, Crime,id) {

      const obj = {
        Name: Name,
        City: City,
        Crime: Crime
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    
    deletethief(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }

}