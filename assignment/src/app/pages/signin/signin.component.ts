import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  auth: IUser = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signin(this.auth).subscribe(
      (data) => {
        console.log(data);
        const accessToken = data.accessToken;
        this.authService.saveToken(accessToken);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        // Xử lý lỗi đăng nhập
      }
    );
  }
}
