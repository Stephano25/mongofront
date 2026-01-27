import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

export interface CardModel {
  _id: string;
  title: string;
  listId: string;
  position: number;
}

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor(private api: ApiService) {}

  getCards(listId: string) {
    return this.api.get<CardModel[]>(`/cards/${listId}`);
  }

  createCard(listId: string, title: string, position: number) {
    return this.api.post<CardModel>('/cards', { listId, title, position });
  }
}
