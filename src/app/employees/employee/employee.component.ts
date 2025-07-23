import { AfterViewInit, ChangeDetectorRef, Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { EmployeeDataSource } from './employee-datasource';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,CommonModule]
})
export class EmployeeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Employee>;

  constructor(private router: Router, private employeeService: EmployeeService) {} 
  
  displayedColumns = ['fullName', 'email','phoneNumber','city','createdOn','actions'];
  
  dataSource = new EmployeeDataSource([]);
  loading = this.employeeService.loading;
  error = this.employeeService.error;

  ngOnInit(): void {
  this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
    this.dataSource.setEmployees(employees);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    if(this.table){
     this.table.dataSource = this.dataSource;
    }

    if(this.paginator){
      this.paginator._changePageSize(this.paginator.pageSize);
    }
  })
  }
  ngAfterViewInit(): void {}

  goToDetails(employee: Employee): void {
      this.router.navigate(['/employees/edit', employee.id]);
    }
  editEmployee(employee: Employee){
    alert("clicked")
    console.log(employee)
  }
  deleteEmployee(employee: Employee){
    alert('clicked')
    console.log(employee)
  }
}
