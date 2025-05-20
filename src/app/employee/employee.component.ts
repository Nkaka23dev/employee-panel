import { AfterViewInit, ChangeDetectorRef, Component, effect, inject, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { EmployeeDataSource } from './employee-datasource';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,CommonModule]
})
export class EmployeeComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Employee>;
  
  dataSource!: EmployeeDataSource;
  private readonly employeeService = inject(EmployeeService);

  displayedColumns = ['fullName', 'email','phoneNumber','city','createdOn','actions'];

  constructor() {
  this.employeeService.fetchEmployees();
  this.dataSource = new EmployeeDataSource([]);

  effect(() => {
    const employees = this.employeeService.employees();
    this.dataSource.setEmployees(employees);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.paginator._changePageSize(this.paginator.pageSize);
  });
 } 

  ngAfterViewInit(): void {
  }
}
