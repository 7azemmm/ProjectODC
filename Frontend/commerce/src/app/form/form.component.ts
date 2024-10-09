import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {



  data : any;
  submitform(e:any){
    e.preventDefault();

    this.data= new FormData(e.target);

    console.log(this.data.get('date'));
    console.log(this.data.get('username'));
    console.log(this.data.get('password'));
  }
}
