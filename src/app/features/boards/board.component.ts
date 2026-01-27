import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardViewModel } from './board.viewmodel';
import { ListComponent } from '../lists/list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardService } from './board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule, ListComponent, DragDropModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardViewModel],
})
export class BoardComponent implements OnInit {
  boardId!: string;
  newTitle = '';

  constructor(
    public vm: BoardViewModel, 
    private route: ActivatedRoute, 
    private service: BoardService,
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardId = params['id'] as string;
      this.vm.loadBoard(this.boardId);
    });
  }

  renameBoard() {
    if (this.newTitle.trim()) {
      this.service.updateBoard(this.boardId, this.newTitle).subscribe(() => {
        this.vm.loadBoard(this.boardId);
        this.newTitle = '';
      });
    }
  }

  deleteBoard() {
    if (confirm('Supprimer ce board ?')) {
      this.service.deleteBoard(this.boardId).subscribe(() => {
        console.log('Board supprimé');
        this.router.navigate(['/']); // ✅ retour à la liste après suppression
      });
    }
  }
  goBack() { 
    this.router.navigate(['/']); // ✅ bouton retour 
  }
}
