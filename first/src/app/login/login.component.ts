import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {

  }

  constructor(private _auth : AuthService) { }

  ngOnInit(): void {}

loginAuth(){
  this._auth.loginAuth(this.loginUserData)
  .subscribe( res => console.log(res),
   err => console.log(err));

// if(this.loginUserData.email == "abdul@123" && this.loginUserData.password == "1234")  {

// }
// else{
//   alert('please enter correct details');
// }

}
};


