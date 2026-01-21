import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewModel } from './card.viewmodel';
import { CardService } from './card.service';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div *ngFor="let card of vm.cards$ | async" class="card">
            {{ card.title }}
        </div>
    `,
    providers: [CardViewModel, CardService],
})
export class CardComponent implements OnInit {
    @Input() listId!: string;

    constructor(public vm: CardViewModel) {}

    ngOnInit() {
        this.vm.load(this.listId);
    }
}