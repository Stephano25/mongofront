import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardService } from './card.service';
import { CardModel } from './card.model';

@Injectable()
export class CardViewModel {
  private cardsSubject = new BehaviorSubject<CardModel[]>([]);
  cards$: Observable<CardModel[]> = this.cardsSubject.asObservable();

  constructor(private service: CardService) {}

  load(listId: string) {
    this.service.getCards(listId).subscribe((cards: CardModel[]) => {
      this.cardsSubject.next(cards);
    });
  }

  addLocal(card: CardModel) {
    this.cardsSubject.next([...this.cardsSubject.value, card]);
  }

  removeLocal(id: string) {
    this.cardsSubject.next(this.cardsSubject.value.filter(c => c._id !== id));
  }
}
