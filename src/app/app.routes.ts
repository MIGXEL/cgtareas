import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { UsersComponent } from './components/users/users.component';
import { BusinessComponent } from './components/business/business.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'task', component: TaskComponent, canActivate: [AuthGuard]},
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'business', component: BusinessComponent, canActivate: [AuthGuard]},
    { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(ROUTES, { useHash: true});