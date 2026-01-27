import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from './card.service';
import { CardModel } from './card.model';

@Injectable()
export class CardViewModel {
  cards$!: Observable<CardModel[]>;

  constructor(private service: CardService) {}

  load(listId: string) {
    this.cards$ = this.service.getCards(listId);
  }
}
