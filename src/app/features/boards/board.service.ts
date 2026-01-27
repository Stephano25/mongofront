import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { BoardModel } from './board.model';

@Injectable({ providedIn: 'root' })
export class BoardService {
  constructor(private api: ApiService) {}

  getBoards() {
    return this.api.get<BoardModel[]>('/boards');
  }

  getBoard(id: string) { // ✅ ajout
    return this.api.get<BoardModel>(`/boards/${id}`);
  }

  createBoard(title: string) {
    return this.api.post<BoardModel>('/boards', { title });
  }

  updateBoard(id: string, title: string) {
    return this.api.put<BoardModel>(`/boards/${id}`, { title });
  }

  deleteBoard(id: string) {
    return this.api.delete<void>(`/boards/${id}`);
  }
}
