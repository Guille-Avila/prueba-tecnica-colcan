import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

export const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'create-user', component: CreateUserComponent },
];
