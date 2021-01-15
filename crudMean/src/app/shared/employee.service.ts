import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
//  import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  selectedEmployee : Employee = {
    _id : '',
    name: '' ,
  position:'',
  office: '',
  salary: '',
  };


  private apiUrl = `${environment.apiUrl}/employees`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(`${this.apiUrl}`, emp);
  }

  getEmployeeList() {
    return this.http.get(`${this.apiUrl}`);
  }

  putEmployee(emp: Employee) {
    return this.http.put(`${this.apiUrl}` + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(`${this.apiUrl}` + `/${_id}`);
  }
}
