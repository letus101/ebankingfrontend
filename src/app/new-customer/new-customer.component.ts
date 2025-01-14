import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import { AppUser } from '../model/appUser.model';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      surName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      image: ['']
    });
  }

  handleSaveCustomer() {
    if (this.newCustomerFormGroup.valid) {
      const formValue = this.newCustomerFormGroup.value;

      // First create the user
      const appUser: AppUser = {
        username: formValue.username,
        email: formValue.email,
        password: formValue.password,
        roleNames: ['USER']
      };

      this.customerService.saveUser(appUser).subscribe({
        next: (savedUser) => {
          // After user is created, create the customer with the saved user data
          const customerDto: Customer = {
            name: formValue.name,
            surName: formValue.surName,
            email: formValue.email,
            phoneNumber: formValue.phoneNumber,
            adresse: formValue.adresse,
            image: formValue.image || '',
            timestamp: new Date().toISOString(),
            appUser: savedUser // Using the saved user data returned from backend
          };

          this.customerService.saveCustomer(customerDto).subscribe({
            next: () => {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Customer has been successfully created'
              });
              this.newCustomerFormGroup.reset();
              this.router.navigateByUrl('/admin/customers');
            },
            error: (err) => {
              Swal.fire({
                icon: 'error',
                title: 'Customer Creation Failed',
                text: err.message || 'Failed to create customer. Please try again.'
              });
            }
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'User Creation Failed',
            text: err.message || 'Failed to create user. Please try again.'
          });
        }
      });
    }
  }
}