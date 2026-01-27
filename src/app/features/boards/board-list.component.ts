import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardService } from './board.service';
import { BoardModel } from './board.model';
import { AuthService } from '../../core/services/auth.service';

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

  // ✅ propriétés manquantes
  showAddForm = false;
  renamingBoardId: string | null = null;
  renameTitle = '';

  constructor(
    private service: BoardService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.service.getBoards().subscribe((data: BoardModel[]) => {
      this.boards = data;
    });
  }

  open(id: string) {
    this.router.navigate(['/boards', id]);
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  createBoard() {
    if (this.newBoardTitle.trim()) {
      this.service.createBoard(this.newBoardTitle).subscribe((board: BoardModel) => {
        this.boards.push(board);
        this.newBoardTitle = '';
        this.showAddForm = false;
      });
    }
  }

  startRename(board: BoardModel) {
    this.renamingBoardId = board._id;
    this.renameTitle = board.title;
  }

  renameBoard(id: string) {
    if (this.renameTitle.trim()) {
      this.service.updateBoard(id, this.renameTitle).subscribe((updated: BoardModel) => {
        const index = this.boards.findIndex(b => b._id === id);
        if (index !== -1) this.boards[index] = updated;
        this.renamingBoardId = null;
        this.renameTitle = '';
      });
    }
  }

  deleteBoard(id: string) {
    if (confirm('Supprimer ce board ?')) {
      this.service.deleteBoard(id).subscribe(() => {
        this.boards = this.boards.filter(b => b._id !== id);
      });
    }
  }

  logout() {
    this.auth.logout();
  }
}
