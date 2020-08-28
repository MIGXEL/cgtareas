import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { UsersComponent } from './components/users/users.component';
import { BusinessComponent } from './components/business/business.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'task', component: TaskComponent},
    { path: 'users', component: UsersComponent},
    { path: 'business', component: BusinessComponent},
    { path: 'reports', component: ReportsComponent},
    { path: 'settings', component: SettingsComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(ROUTES, { useHash: true});