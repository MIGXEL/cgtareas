import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/users.model';
import { ApirestService } from 'src/app/services/apirest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserModel;

  userToken = '';
  recordarme = false;

  constructor(private api: ApirestService,
              private router: Router) {

    this.leerToken();
    this.usuario = new UserModel();
  }

  ngOnInit(): void {

    if (localStorage.getItem('email')) {

      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;

    }

  }

  login(form: NgForm) {

    this.api.login(this.usuario)
      .then(result => {
        console.log(result);
        if (result.login) {

          this.usuario = result.detalle;
          console.log(this.usuario["token"]);
          this.guardarToken(this.usuario["token"]);
          localStorage.setItem('email', this.usuario["correo"]);

          this.router.navigateByUrl('/home');

        } else {

          console.log(result.detalle);

        }
      })
      .catch(error => console.log('error', error));
  }


  private guardarToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);

  }

  leerToken() {

    if (localStorage.getItem('token')) {

      this.userToken = localStorage.getItem('token');
      console.log('leer token: ', this.userToken);

    } else {

      this.userToken = '';

    }
  }


}
