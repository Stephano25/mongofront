import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from './board.service';
import { BoardModel } from './board.model';

@Injectable()
export class BoardViewModel {
  board$!: Observable<BoardModel>;

  constructor(private service: BoardService) {}

  load(id: string) {
    this.board$ = this.service.getBoardById(id); // ✅ maintenant reconnu
  }
}
