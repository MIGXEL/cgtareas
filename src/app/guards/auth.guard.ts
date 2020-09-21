import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ApirestService } from '../services/apirest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private api: ApirestService,
                private router: Router){

  }

  canActivate(): boolean {

    if (this.api.autenticado()) {
      
      console.log('login', this.api.autenticado());
        return true;
        
    } else {
      console.log('login', this.api.autenticado());
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
