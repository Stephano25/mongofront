import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardViewModel } from './board.viewmodel';
import { BoardService } from './board.service';
import { ListComponent } from '../../lists/list.component';

@Component({
 selector: 'app-board',
 standalone: true,
 imports: [CommonModule, ListComponent],
 templateUrl: './board.component.html',
 providers: [BoardViewModel, BoardService],
})
export class BoardComponent implements OnInit {
  board: any;
 
  constructor(public vm: BoardViewModel) {}

  ngOnInit() {
    this.vm.boards$.subscribe((boards) => {
      this.board = boards[0];
    });
 }
}