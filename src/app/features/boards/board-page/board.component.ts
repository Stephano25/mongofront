import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardViewModel } from './board.viewmodel';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  providers: [BoardViewModel, BoardService],
})
export class BoardComponent {
  constructor(public vm: BoardViewModel) {}
}
