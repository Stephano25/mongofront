import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ListModel } from './list.model';

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private api: ApiService) {}

  getLists(boardId: string) {
    return this.api.get<ListModel[]>(`/lists/${boardId}`);
  }

  createList(boardId: string, title: string, position: number) {
    return this.api.post<ListModel>('/lists', { boardId, title, position });
  }

  updateListPositions(boardId: string, lists: ListModel[]) {
    return this.api.post<{ success: boolean }>('/lists/update-positions', { boardId, lists });
  }

  deleteList(id: string) {
    return this.api.delete<void>(`/lists/${id}`);
  }
}
