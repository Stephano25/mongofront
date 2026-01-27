import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardService } from './board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board-list.component.html',
})
export class BoardListComponent implements OnInit {
  boards: { _id: string; title: string }[] = [];
  newBoardTitle = '';

  constructor(private service: BoardService, private router: Router) {}

  ngOnInit() {
    this.service.getBoards().subscribe(data => this.boards = data);
  }

  open(id: string) {
    this.router.navigate(['/boards', id]);
  }

  createBoard() {
    if (this.newBoardTitle.trim()) {
      this.service.createBoard(this.newBoardTitle).subscribe(board => {
        this.boards.push(board);
        this.newBoardTitle = '';
        this.router.navigate(['/boards', board._id]);
      });
    }
  }
}
