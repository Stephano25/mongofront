import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListViewModel } from './list.viewmodel';
import { ListService } from './list.service';
import { ListModel } from './list.model';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CardComponent } from '../cards/card.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListViewModel]
})
export class ListComponent implements OnInit {
  @Input() boardId!: string;
  newListTitle = '';

  constructor(public vm: ListViewModel, private service: ListService) {}

  ngOnInit() {
    this.vm.load(this.boardId);
  }

  addList() {
    if (this.newListTitle.trim()) {
      this.service.createList(this.boardId, this.newListTitle, Date.now()).subscribe((list: ListModel) => {
        this.vm.addLocal(list); // ✅ ajout instantané
        this.newListTitle = '';
      });
    }
  }

  drop(event: CdkDragDrop<ListModel[]>) {
    const lists: ListModel[] = event.container.data ?? [];
    moveItemInArray(lists, event.previousIndex, event.currentIndex);

    this.service.updateListPositions(this.boardId, lists).subscribe(() => {
      this.vm.load(this.boardId); // ✅ recharge après drag & drop
    });
  }

  deleteList(id: string) {
    if (confirm('Supprimer cette liste ?')) {
      this.service.deleteList(id).subscribe(() => {
        this.vm.removeLocal(id); // ✅ suppression instantanée
      });
    }
  }
}
