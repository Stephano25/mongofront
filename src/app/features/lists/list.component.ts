import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModel } from './list.viewmodel';
import { ListService } from './list.service';
import { CardComponent } from '../cards/card.component';

@Component({
    selector: 'app-lists',
    standalone: true,
    imports: [CommonModule, CardComponent],
    template: `
        <div class="list" *ngFor="let list of vm.lists$ | async">
            <h3>{{ list.title }}</h3>
            <app-cards [listId]="list._id"></app-cards>
        </div>
    `,
    providers: [ListViewModel, ListService],
})
export class ListComponent implements OnInit {
    @Input() boardId!: string;

    constructor(public vm: ListViewModel) {}

    ngOnInit() {
        this.vm.load(this.boardId);
    }
}