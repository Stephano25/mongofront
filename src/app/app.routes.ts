import { Routes } from '@angular/router';
import { BoardListComponent } from './features/boards/board-list.component';
import { BoardComponent } from './features/boards/board.component';
import { LoginComponent } from './modules/auth/login.component';
import { RegisterComponent } from './modules/auth/register.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'boards', component: BoardListComponent, canActivate: [AuthGuard] }, // ✅ protégé
  { path: 'boards/:id', component: BoardComponent, canActivate: [AuthGuard] }, // ✅ protégé
  { path: '**', redirectTo: 'login' }
];
