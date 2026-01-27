import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListViewModel } from './list.viewmodel';
import { ListService } from './list.service';
import { CardComponent } from '../cards/card.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './list.component.html',
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
      this.service.createList(this.boardId, this.newListTitle, Date.now()).subscribe(() => {
        this.vm.load(this.boardId);
        this.newListTitle = '';
      });
    }
  }
}
