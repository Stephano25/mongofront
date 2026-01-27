import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { BoardModel } from '../boards/board.model';

@Injectable({ providedIn: 'root' }) // ✅ injection globale
export class BoardService {
  constructor(private api: ApiService) {}

  getBoards() {
    return this.api.get<BoardModel[]>('/boards');
  }

  createBoard(title: string) {
    return this.api.post<BoardModel>('/boards', { title });
  }

  getBoardById(id: string) {
    return this.api.get<BoardModel>(`/boards/${id}`);
  }
}
