import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { CardModel } from './card.model';

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor(private api: ApiService) {}

  getCards(listId: string) {
    return this.api.get<CardModel[]>(`/cards/${listId}`);
  }

  createCard(listId: string, title: string, position: number) {
    return this.api.post<CardModel>('/cards', { listId, title, position });
  }

  updateCardPositions(listId: string, cards: CardModel[]) {
    return this.api.post<any>('/cards/update-positions', { listId, cards });
  }

  deleteCard(id: string) {
    return this.api.delete(`/cards/${id}`);
}
}
