import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor( private http: HttpClient) { 
    console.log('apirest listo para usar');
   }

   getUsuarios(){

    return this.http.get('https://www.cgtareaapi.antvas.cl/usuarios');

   }
}
