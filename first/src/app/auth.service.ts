import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private loginUrl = "https://localhost:3000/api/login";
  constructor(private http : HttpClient) { }

loginAuth(user){
  return this.http.post(this.loginUrl, user);
}

}
