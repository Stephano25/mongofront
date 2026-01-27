import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListService } from './list.service';
import { ListModel } from './list.model';

@Injectable()
export class ListViewModel {
  private listsSubject = new BehaviorSubject<ListModel[]>([]);
  lists$: Observable<ListModel[]> = this.listsSubject.asObservable();

  constructor(private service: ListService) {}

  load(boardId: string) {
    this.service.getLists(boardId).subscribe((lists: ListModel[]) => {
      this.listsSubject.next(lists);
    });
  }

  addLocal(list: ListModel) {
    this.listsSubject.next([...this.listsSubject.value, list]);
  }

  removeLocal(id: string) {
    this.listsSubject.next(this.listsSubject.value.filter(l => l._id !== id));
  }
}
