import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementService {

  hodArray : any[] = [
    {
      userName : 'hod',
      password : '1234'
    }
  ];

  staffArray : any[] = [
    {
      userName : 'staff',
      password : '1234'
    }
  ];

  constructor() { }

  getHODArray() {
    return this.hodArray;
  }

  getStaffArray() {
    return this.staffArray;
  }
}
