import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

/*RUTAS*/
import { app_routing } from './app.routes';

/* SERVICIOS */
import { ApirestService } from './services/apirest.service';
import { DatesService } from './services/dates.service';

/* PIPES  */
import { ReplacePipe } from './pipes/replace.pipe';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { SlopesComponent } from './task/slopes/slopes.component';
import { TodayComponent } from './task/today/today.component';

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
    SettingsComponent,
    RootNavComponent,
    LoginComponent,
    ReplacePipe,
    SlopesComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    DatesService,
    ApirestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
