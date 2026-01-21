import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from './card.service';

export interface CardModel {
  _id: string;
  title: string;
  description?: string;
  listId: string;
  position: number;
}

@Injectable()
export class CardViewModel {
  cards$!: Observable<CardModel[]>;

  constructor(private service: CardService) {}

  load(listId: string) {
    this.cards$ = this.service.getCards(listId);
  }
}
