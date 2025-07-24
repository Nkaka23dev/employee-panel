import { Component, Input } from '@angular/core';
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
}
