import { EmployeeDTO } from "./backends/employee.dto";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  createdBy: string;
  createdOn: Date;
  lastModifiedBy: string;
  lastModifiedOn: Date;

  constructor(employeeDTO: EmployeeDTO) {
    this.id = employeeDTO.id;
    this.firstName = employeeDTO.firstName;
    this.lastName = employeeDTO.lastName;
    this.fullName = `${employeeDTO.firstName} ${employeeDTO.lastName}`;
    this.address1 = employeeDTO.address1;
    this.address2 = employeeDTO.address2;
    this.city = employeeDTO.city;
    this.state = employeeDTO.state;
    this.zipCode = employeeDTO.zipCode;
    this.phoneNumber = employeeDTO.phoneNumber;
    this.email = employeeDTO.email;
    this.createdBy = employeeDTO.createdBy;
    this.createdOn = new Date(employeeDTO.createdOn);
    this.lastModifiedBy = employeeDTO.lastModifiedBy;
    this.lastModifiedOn = new Date(employeeDTO.lastModifiedOn);
  }
}
