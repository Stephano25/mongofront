import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel, ListService } from './list.service';

@Injectable()
export class ListViewModel {
    lists$!: Observable<ListModel[]>;

    constructor(private service: ListService) {}
    load(boardId: string) {
        this.lists$ = this.service.getLists(boardId);
    }
}