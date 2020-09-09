import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/users.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private url = 'https://www.cgtareaapi.antvas.cl';


  constructor(private http: HttpClient) {
    console.log('apirest listo para usar');
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

  getUsuarios() {

    return this.http.get('http://apirest-php.com/usuarios');

  }

  getTareas() {

    return this.http.get('http://apirest-php.com/tareas');

  }
}
