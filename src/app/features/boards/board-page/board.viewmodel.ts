import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from './board.service';

@Injectable()
export class BoardViewModel {
  board$!: Observable<any>;

  constructor(private service: BoardService) {}

  loadBoard(id: string) {
    this.board$ = this.service.getBoardById(id);
  }
}
