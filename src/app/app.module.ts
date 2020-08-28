import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*RUTAS*/
import { app_routing } from './app.routes';

/* SERVICIOS */
import { ApirestService } from './services/apirest.service';
import { DatesService } from './services/dates.service';


/* COMPONENTES*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { UsersComponent } from './components/users/users.component';
import { BusinessComponent } from './components/business/business.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    TaskComponent,
    UsersComponent,
    BusinessComponent,
    ReportsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule
  ],
  providers: [
    DatesService,
    ApirestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
