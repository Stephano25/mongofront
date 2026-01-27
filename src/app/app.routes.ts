import { Routes } from '@angular/router';
import { BoardListComponent } from './features/boards/board-list.component';
import { BoardComponent } from './features/boards/board.component';
import { LoginComponent } from './modules/auth/login.component';
import { RegisterComponent } from './modules/auth/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ✅ ouvre login par défaut
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'boards', component: BoardListComponent },
  { path: 'boards/:id', component: BoardComponent },
  { path: '**', redirectTo: 'login' }
];
