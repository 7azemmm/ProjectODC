import { Component } from '@angular/core';
import { Login } from '../../model/class/UserLogin';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {



  loginObj: Login;
  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }



onLogin() {
  this.http.post('http://localhost:8085/User/Login', this.loginObj)
    .subscribe(
      (res: any) => {
        if (res.result) {
          // Success: Show a SweetAlert success message
          Swal.fire({
            title: 'Login Successful!',
            text: 'Welcome back!',
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then(() => {
            // Store token in local storage
            localStorage.setItem('token', res.data.token);

            localStorage.setItem('name' , res.name)

            // Navigate to the dashboard
            this.router.navigate(['/dashboard']);
          });
        } else {
          // Failure: Show a SweetAlert error message
          Swal.fire({
            title: 'Login Failed',
            text: res.message || 'An error occurred. Please try again.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      },
      (error) => {
        // Handle network errors or other unexpected issues
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred. Please check your connection and try again.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
}


}
