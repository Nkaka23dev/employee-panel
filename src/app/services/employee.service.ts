import { inject, Injectable, signal } from "@angular/core";
import { ApiService } from "../api/api.service";
import { Employee } from "../models/employee.model";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    
constructor(private api: ApiService){}

 private _loading = signal(false);
 public readonly loading = this._loading.asReadonly();

 private _error = signal<string | null>(null);
 public readonly error = this._error.asReadonly();

 getEmployees(){
    return this.api.get<Employee[]>('employee/all').pipe(
    map((data) => data.map(dto => new Employee(dto))),
    catchError((error: unknown) => {
        let message = "Unkown error occured"
        if(error instanceof HttpErrorResponse){
            message = `Error ${error.status}: ${error.message}`
        }else if(error instanceof Error){
            message = error.message;
        }
        console.error('Fetch users failed', error);
        this._error.set(message);

        return of([])
    }),
    tap(() => this._loading.set(false))
    )
 }
 getOneEmployee(id: number){
  return this.api.get<Employee>(`employee/${id}`).pipe(
    map((data) => new Employee(data)),
    tap((data) => {debugger})
  )
 }
}