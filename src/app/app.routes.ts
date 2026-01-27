import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login.component';
import { RegisterComponent } from './modules/auth/register.component';
import { BoardComponent } from './features/boards/board-page/board.component';
import { BoardListComponent } from './features/boards/board-page/board-list.component';

export const routes: Routes = [ 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'boards', component: BoardListComponent }, 
  { path: 'boards/:id', component: BoardComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];
