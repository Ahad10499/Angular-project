import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = `${environment.apiUrl}/auth`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
    ) {  this.handleError = this.httpErrorHandler.createHandleError('AuthServiceService')}

    signup(data: User) {
      return this.http.post(`${this.apiUrl}/signup`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError('signup', null))
      )
    }
}
