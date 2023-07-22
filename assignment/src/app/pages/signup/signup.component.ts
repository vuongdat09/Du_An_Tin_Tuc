import { Component } from '@angular/core';
import { ISignup } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  auth: ISignup = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService, private router: Router) {}
  signup() {
    this.authService.signup(this.auth).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/signin']);
    });
  }
}
