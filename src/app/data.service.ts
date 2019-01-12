import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  customerList: AngularFireList<any> = [];
  validatedForm: any;

  constructor(private firebase: AngularFireDatabase) { this.getCustomers() }

  getCustomers() {
  this.customerList = this.firebase.list('customers');

  return this.customerList.snapshotChanges();
}

  addEmail(customer) {
    this.customerList.push(customer);
  }

  // addEmail(form) {
  //   console.log(form);
  // }
}
