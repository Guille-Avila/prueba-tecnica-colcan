import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  formUser: FormGroup;
  showModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formUser = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(5)]],
    });
  }

  validFormUser() {
    console.log('click en submit');

    if (this.formUser.valid) {
      this.createUser();
    } else {
      this.formUser.markAllAsTouched();
    }
  }

  private createUser() {
    const dataUser = {
      name: this.formUser.get('name')?.value,
      email: this.formUser.get('email')?.value,
      phone: this.formUser.get('phone')?.value,
      address: this.formUser.get('address')?.value,
    };

    this.userService.postUser(dataUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.showModal = true;
      },
      error: (error: any) => {
        console.error('Servicio no disponible');
      },
    });
  }

  navToHome() {
    this.router.navigate(['']);
  }
}
