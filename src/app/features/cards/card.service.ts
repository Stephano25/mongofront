import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable()
export class CardService {
    constructor(private api: ApiService) {}

    getCards(listId: string) {
        return this.api.get<any[]>(`/cards/${listId}`);
    }
}