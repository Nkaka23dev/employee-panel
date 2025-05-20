import { inject, Injectable, signal } from "@angular/core";
import { ApiService } from "../api/api.service";
import { Employee } from "../models/employee.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
 private readonly api = inject(ApiService);

 private _employees = signal<Employee[]>([]);
 public readonly employees = this._employees.asReadonly()

 private _loading = signal(false);
 public readonly loading = this._loading.asReadonly();

 private _error = signal<string | null>(null);
 public readonly error = this._error.asReadonly();

 fetchEmployees(){
    this._loading.set(true);
    this.api.get<Employee[]>('employee/all').subscribe({

        next: (data) => {
            const employees = data.map(dto => new Employee(dto));
            this._employees.set(employees)
        },
        error: (error: unknown) => {
            let message = 'Unkown error occured'

            if(error instanceof Error){
                message = error.message;
            }
            else if(error instanceof HttpErrorResponse){
                message = `Error ${error.status}: ${error.message}`
            }
            console.log('Fetch users faile', error)
            this._error.set(message)
            this._loading.set(false)
            this._employees.set([])
        },
        complete: () => this._loading.set(false)      
    })
 }
 resetError(){
    this._error.set(null);
 }
}