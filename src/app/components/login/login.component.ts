import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/users.model';
import { ApirestService } from '../../services/apirest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

    this.usuario = new UserModel();
  }

  ngOnInit(): void {

    if (localStorage.getItem('email')) {

      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;

    }

  }

  login(form: NgForm) {

    Swal.fire({
      allowOutsideClick: false,
      title: 'Autenticando...!',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })

    this.api.login(this.usuario)
      .then(result => {

        /* CONDICION PARA SABER SI LOGIN E CORRECTO O INCORRECTO */
        if (result.login) {

          /* ALMACENAMOS DATOS USUARIO LOGEADO CORRECTAMENTE */
          this.usuario = result.detalle;

          /* GUARDAMOS TOKEN DE USUARIO EN LOCALSTOTAGE */
          this.guardarToken(this.usuario["token"]);

          /* GUARDAMOS EMAIL DE USUARIO EN LOCALSTOTAGE */
          if (this.recordarme) {
            localStorage.setItem('email',this.usuario["correo"]);
            this.recordarme = true;
          }else{
            localStorage.removeItem('email');
            this.recordarme = false;
          }

          Swal.close();

          /* SI LO LOGIN ES CORRECTO REDIRECIONAMOS A PAGE HOME */
          console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('/home');

        } 
        /* LOGIN INCORRECTO */
        else {

          this.usuario = result;
          console.log(this.usuario);

          Swal.fire({
            icon: 'error',
            title: this.usuario["detalle"],
            
          })

        }

        return this.usuario;
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
      console.log('leer token: ', this.userToken.length);
      

    } else {

      this.userToken = '';
      

    }
  }

  
 


}
