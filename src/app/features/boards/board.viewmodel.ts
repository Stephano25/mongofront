import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoardService } from './board.service';
import { BoardModel } from './board.model';

@Injectable()
export class BoardViewModel {
  private boardSubject = new BehaviorSubject<BoardModel | null>(null);
  board$: Observable<BoardModel | null> = this.boardSubject.asObservable();

  constructor(private service: BoardService) {}

  loadBoard(id: string) {
    this.service.getBoard(id).subscribe((board: BoardModel) => { // ✅ typage explicite
      this.boardSubject.next(board);
    });
  }

  updateLocal(title: string) {
    const current = this.boardSubject.value;
    if (current) {
      this.boardSubject.next({ ...current, title });
    }
  }
}
