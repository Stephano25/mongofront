import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { BoardService } from '../../features/boards/board.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private boardService: BoardService
  ) {}

  login() {
    this.auth.login(this.email, this.password).subscribe(res => {
      localStorage.setItem('token', res.access_token);

      this.boardService.getBoards().subscribe(boards => {
        if (boards.length > 0) {
          this.router.navigate(['/boards', boards[0]._id]);
        } else {
          this.router.navigate(['/boards']);
        }
      });
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
