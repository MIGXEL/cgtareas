import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { LoginComponent } from '../components/login/login.component';
import { ApirestService } from '../services/apirest.service';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent implements OnInit {

  usuario={
    nombre: 'usaurio',
    apellido: 'usuario',
    correo: 'correo@correo.com'        
  };

  infoUsuario = true;
  user;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public api: ApirestService) {
  
    

  }

  ngOnInit(): void {
    
    this.api.usuario$.subscribe( usuario =>{
      this.usuario = usuario;
    });

    this.api.leerUsuario();

    
  }

  logout(){
    this.api.logout();
    this.api.leerUsuario();

  }



}
