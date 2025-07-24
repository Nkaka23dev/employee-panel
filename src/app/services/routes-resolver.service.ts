import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class EmployeeResolver {
    constructor(
        private employeeService: EmployeeService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Employee | null> {
        const idParam = route.paramMap.get('id');
        const id = idParam ? Number(idParam) : null;

        if (id === null || isNaN(id)) {
            this.router.navigate(['/not-found']);
            return of(null);
        }

        return this.employeeService.getOneEmployee(id).pipe(
            tap((employee) => {
                if (!employee) this.router.navigate(['/not-found']);
            }),
            catchError(() => {
                this.router.navigate(['/not-found']);
                return of(null);
            })
        );
    }
}
