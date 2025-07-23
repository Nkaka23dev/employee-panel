export interface EmployeeDTO {
  id: number;
  firstName: string;
  lastName: string;
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
  lastModifiedOn: Date
}