import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/users.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private url = 'https://www.cgtareaapi.antvas.cl';

  usuario={
    nombre: 'usaurio',
    apellido: 'usuario',
    correo: 'correo@correo.com'        
  };
  userToken: string;
  tokenValid: boolean;

  usuario$ = new EventEmitter();

  constructor(private http: HttpClient,
              private router: Router) {

    
    this.leerToken();

    
    
  }

  /* ------------------------------------ */
  /* FUNCIONES USER COMPONENTS */
  /* ------------------------------------ */ 

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

  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');

  }

  getUsuarios() {

    return this.http.get(`${this.url}/usuarios`);

  }

  createUser(usuario: UserModel) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");



    var urlencoded = new URLSearchParams();
    urlencoded.append("nombre", usuario.nombre);
    urlencoded.append("apellido", usuario.apellido);
    urlencoded.append("correo", usuario.email);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    return fetch(`${this.url}/registro`, requestOptions)
      .then(response => response.json());


  }

  createTarea(){
    console.log('Tarea Creada');
  }

  getTareas() {

    return this.http.get(`${this.url}/tareas`);

  }

  getTarea(id) {

    return this.http.get(`${this.url}/tareas/${id}`)
    .subscribe(resp =>{
      console.log(resp);
    })

  }

  /* updateTarea(id) {

    return this.http.put(`${this.url}/tareas/${id}`, this.urlencoded)
    .subscribe(resp =>{
      console.log(resp);
    })

  } */

  deleteTarea(id) {

    return this.http.delete(`${this.url}/tareas/${id}`)
    .subscribe(resp =>{
      console.log(resp);
    })

  }
  
  autenticado(): boolean {
    this.leerToken();
    return this.userToken.length > 2;
    
  }


  
  /* ------------------------------------ */
  /* FUNCIONES LOCALSTORAGE */
  /* ------------------------------------ */  
  
  leerUsuario(){
    
    if (localStorage.getItem('usuario')) {
      
      this.usuario$.emit(JSON.parse(localStorage.getItem('usuario')));
      

    }else{
      this.usuario$.emit(this.usuario);
    }
  }
  
  leerToken() {

    if (localStorage.getItem('token')) {

      this.userToken = localStorage.getItem('token');
      this.tokenValid = true;

    } else {

      this.userToken = '';
      this.tokenValid = false;

    }

    return this.tokenValid;
  }


}
