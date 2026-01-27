import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardService } from './board.service';
import { BoardModel } from './board.model';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: BoardModel[] = [];
  newBoardTitle = '';

  constructor(private service: BoardService, private router: Router) {}

  ngOnInit() {
    this.service.getBoards().subscribe((data: BoardModel[]) => {
      this.boards = data;
    });
  }

  open(id: string) {
    this.router.navigate(['/boards', id]);
  }

  createBoard() {
    if (this.newBoardTitle.trim()) {
      this.service.createBoard(this.newBoardTitle).subscribe((board: BoardModel) => {
        this.boards.push(board); // ✅ ajout instantané
        this.newBoardTitle = '';
        this.router.navigate(['/boards', board._id]);
      });
    }
  }

  deleteBoard(id: string) {
    if (confirm('Supprimer ce board ?')) {
      this.service.deleteBoard(id).subscribe(() => {
        this.boards = this.boards.filter(b => b._id !== id); // ✅ suppression instantanée
      });
    }
  }
}
