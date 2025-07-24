import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-edit-employee',
    standalone: true,
    imports: [],
    templateUrl: './edit-employee.component.html',
    styleUrl: './edit-employee.component.scss',
})
export class EditEmployeeComponent {
    emp$!: Observable<any>;
    constructor(private emp: EmployeeService) {}
    @Input() set(employeeId: number) {
        // this.emp$ = this.emp.getEmployeeById(employeeId);
    }
}
