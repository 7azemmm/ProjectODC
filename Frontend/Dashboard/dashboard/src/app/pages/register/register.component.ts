import { Component } from '@angular/core';
import { Register } from '../../model/class/UserRegister';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {



  registerObj : Register;
  constructor(private http: HttpClient, private router: Router) {
    this.registerObj = new Register();
   }

   onSignUp() {
    this.http.post('http://localhost:8085/User/Register', this.registerObj)
      .subscribe((res: any) => {
        if (res.result) {
          Swal.fire({
            title: 'Success!',
            text: res.message,  // Display the success message from the server
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then(() => {
            this.router.navigate(['/login']);
          });
        } else {
          Swal.fire({
            title: 'Oops!',
            text: res.message,  // Display the error message from the server
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred during registration. Please try again later!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  }



}
