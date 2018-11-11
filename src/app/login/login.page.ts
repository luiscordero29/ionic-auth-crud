import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import validator from 'validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
  });

  loginFormValidator = {
    userEmail: {
      empty: '',
      email: '',
    },
    userPassword: {
      empty: '',
    }
  };

  constructor() { }

  ngOnInit() {
  }

  formValidator(): boolean {
    if (validator.isEmpty(this.loginForm.value.userEmail)) {
      this.loginFormValidator.userEmail.empty = 'La dirección de correo es requerido';
      return false;
    } else {
      this.loginFormValidator.userEmail.empty = '';
    }
    if (!validator.isEmail(this.loginForm.value.userEmail)) {
      this.loginFormValidator.userEmail.email = 'Ingrese una dirección de correo válida';
      return false;
    } else {
      this.loginFormValidator.userEmail.email = '';
    }
    if (validator.isEmpty(this.loginForm.value.userPassword)) {
      this.loginFormValidator.userPassword.empty = 'La contraseña es requerido';
      return false;
    } else {
      this.loginFormValidator.userPassword.empty = '';
    }
    return true;
  }

  onSubmit() {
    if (this.formValidator()) {
      console.log('Formulario Validado');
    }
  }
}
