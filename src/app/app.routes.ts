import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./employee/employee.component').then((m) => m.EmployeeComponent)
  }
];
