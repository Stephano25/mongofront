import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BoardViewModel } from './board.viewmodel';
import { ListComponent } from '../../lists/list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ListComponent, DragDropModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardViewModel],
})
export class BoardComponent implements OnInit {
  boardId!: string;

  constructor(public vm: BoardViewModel, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardId = params['id'] as string;
      this.vm.loadBoard(this.boardId);
    });
  }
}
