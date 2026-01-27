import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class BoardService {
  constructor(private api: ApiService) {}

  createBoard(title: string) {
    return this.api.post<any>('/boards', { title });
  }

  getBoards() {
    return this.api.get<any[]>('/boards');
  }

  getBoardById(id: string) {
    return this.api.get<any>(`/boards/${id}`);
  }
}
