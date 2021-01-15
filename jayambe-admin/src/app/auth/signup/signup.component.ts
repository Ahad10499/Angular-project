import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { passwordMatchValidator } from '../../shared/validators/password-match';
import { AuthService } from '../services/auth-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  model: User;
  title: string;
  isMessage: boolean;
  constructor( private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {this.createForm();
    this.title = 'Create an account';
  }
  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]]
    }, { validators: passwordMatchValidator })
  }

  get f() { return this.signupForm.controls }

  onSubmit() {
    this.model = this.signupForm.value;
    this.authService.signup(this.model).subscribe(
      result => {
        //console.log(result);
        if( ! result.error) {
          this.router.navigateByUrl('/auth/login');
        }
      }
    )
  }

}
