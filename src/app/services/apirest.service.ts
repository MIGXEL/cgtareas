import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/users.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private url = 'https://www.cgtareaapi.antvas.cl';
  userToken: string;

  constructor(private http: HttpClient,
              private router: Router) {

    
    this.leerToken();
    
  }

  login(usuario: UserModel) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");



    var urlencoded = new URLSearchParams();
    urlencoded.append("correo", usuario.email);
    urlencoded.append("password", usuario.password);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    return fetch(`${this.url}/login`, requestOptions)
      .then(response => response.json());
      


  }

  leerToken() {

    if (localStorage.getItem('token')) {

      this.userToken = localStorage.getItem('token');
      console.log('leer token servicio: ', this.userToken);

    } else {

      this.userToken = '';

    }

    return this.userToken;
  }

  getUsuarios() {

    return this.http.get(`${this.url}/usuarios`);

  }

  getTareas() {

    return this.http.get(`${this.url}/tareas`);

  }

  autenticado(): boolean {
    this.leerToken();
    return this.userToken.length > 2;
  }

}
