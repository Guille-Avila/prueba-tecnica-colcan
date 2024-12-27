import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  usersToshow: any = [];
  allUsers: any = [];
  idUsuario: number | undefined = undefined;
  infoUser: any;

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  navigateToCreateUser() {
    this.router.navigate(['/create-user']);
  }

  mostrarInfoUsuario() {
    let user = this.allUsers.find((user: any) => user.id == this.idUsuario);
    this.infoUser = user;
    console.log(user);
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        this.usersToshow = res.slice(0, 5);
        this.allUsers = res;
        console.log(res.slice(0, 5));
      },
      error: (error: any) => {
        console.error('Servicio no disponible');
      },
    });
  }
}
