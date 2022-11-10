import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  customerLoginUrl =  environment.Base_Url + "customer/login";
  form: FormGroup;
  isTypePassword: boolean = true;
  constructor(private router:Router, private authservice:AuthService) {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      // email: new FormControl('', 
      //   {validators: [Validators.required, Validators.email]}
      // ),
      email: new FormControl('', 
        {validators: [Validators.required]}
      ),
      password: new FormControl('', 
        {validators: [Validators.required]}
        // Validators.minLength(8)
      ),
      
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }


 
  onSubmit() {
//  console.log(this.form.value);
     this.authservice.login(this.customerLoginUrl, this.form.value).subscribe(data => {
        //  console.log(data);
        this.router.navigate(['/dashboard']);

     }, err=> {
      console.log(err)
     });
   }
}
