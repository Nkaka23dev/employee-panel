import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { OthersComponent } from './others/others.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeResolver } from './services/routes-resolver.service';
import { LoginComponent } from './login/login.component';
import { MainlayoutComponent } from './layout/main-layout/mainlayout.component';

export const routes: Routes = [
   {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
 },
 {
  path: 'login',
  component: LoginComponent
 },
 {
  path: '',
  component: MainlayoutComponent,
  children: [
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'employees', component: EmployeeComponent },
      {
        path: 'employees/edit/:id',
        component: EditEmployeeComponent,
        resolve: { employee: EmployeeResolver }
      },
      { path: 'department', component: DepartmentComponent },
      { path: 'benefits', component: BenefitsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'others', component: OthersComponent },
    
  ]
 },
  {
    path: '**',
    component: NotFoundComponent
  }
];
