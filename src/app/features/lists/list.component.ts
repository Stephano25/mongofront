import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModel } from './list.viewmodel';
import { ListService } from './list.service';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list" *ngFor="let list of vm.lists$ | async">
      <h3>{{ list.title }}</h3>
      <!-- Tu pourras ajouter app-cards ici plus tard -->
    </div>

    <button (click)="addList()">+ Ajouter une liste</button>
  `,
  providers: [ListViewModel]
})
export class ListComponent implements OnInit {
  @Input() boardId!: string;

  constructor(public vm: ListViewModel, private service: ListService) {}

  ngOnInit() {
    this.vm.load(this.boardId);
  }

  addList() {
    const title = prompt('Nom de la liste :');
    if (title?.trim()) {
      this.service.createList(this.boardId, title, Date.now()).subscribe(() => {
        this.vm.load(this.boardId); // recharge les listes
      });
    }
  }
}
