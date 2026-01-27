import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

export interface ListModel {
  _id: string;
  title: string;
  boardId: string;
  position: number;
}

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private api: ApiService) {}

  getLists(boardId: string) {
    return this.api.get<ListModel[]>(`/lists/${boardId}`);
  }

  createList(boardId: string, title: string, position: number) {
    return this.api.post<ListModel>('/lists', { boardId, title, position });
  }
}
