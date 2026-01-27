import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel, CardService } from './card.service';

@Injectable()
export class CardViewModel {
  cards$!: Observable<CardModel[]>;

  constructor(private service: CardService) {}

  load(listId: string) {
    this.cards$ = this.service.getCards(listId);
  }
}
