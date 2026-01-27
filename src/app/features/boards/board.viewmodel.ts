import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from './board.service';
import { BoardModel } from './board.model';

@Injectable()
export class BoardViewModel {
  board$!: Observable<BoardModel>;

  constructor(private service: BoardService) {}

  loadBoard(id: string) {
    this.board$ = this.service.getBoardById(id);
  }
}
