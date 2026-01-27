import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from './list.service';
import { I } from '@angular/cdk/keycodes';
import { ListModel } from './list.model';

@Injectable()
export class ListViewModel {
  lists$!: Observable<ListModel[]>;

  constructor(private service: ListService) {}

  load(boardId: string) {
    this.lists$ = this.service.getLists(boardId);
  }
}
