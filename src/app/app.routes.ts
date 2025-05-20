import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { OthersComponent } from './others/others.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
   {
    path: 'benefits',
    component: BenefitsComponent
  },
   {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'others',
    component: OthersComponent
  }
];
