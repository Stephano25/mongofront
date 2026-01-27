import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'   // ✅ rend le service disponible partout
})
export class BoardService {
  constructor(private api: ApiService) {}

  getBoards() {
    return this.api.get<any[]>('/boards');
  }

  getBoardById(id: string) {
    return this.api.get<any>(`/boards/${id}`);
  }
}
