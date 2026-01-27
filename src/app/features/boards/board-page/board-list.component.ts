import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from './board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Mes Boards</h2>
    <ul>
      <li *ngFor="let board of boards" (click)="open(board._id)">
        {{ board.title }}
      </li>
    </ul>
    <button (click)="createBoard()">+ Nouveau board</button>
  `,
  providers: [BoardService]
})
export class BoardListComponent implements OnInit {
  boards: any[] = [];

  constructor(private service: BoardService, private router: Router) {}

  ngOnInit() {
    this.service.getBoards().subscribe(data => this.boards = data);
  }

  open(id: string) {
    this.router.navigate(['/boards', id]);
  }

  createBoard() {
    const title = prompt('Nom du nouveau board :');
    if (title?.trim()) {
      this.service.createBoard(title).subscribe((board: { _id: string; title: string }) => {
        this.router.navigate(['/boards', board._id]);
      });
    }
  }
}
