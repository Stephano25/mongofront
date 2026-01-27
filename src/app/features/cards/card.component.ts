import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardViewModel } from './card.viewmodel';
import { CardService } from './card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  providers: [CardViewModel]
})
export class CardComponent implements OnInit {
  @Input() listId!: string;
  newCardTitle = '';

  constructor(public vm: CardViewModel, private service: CardService) {}

  ngOnInit() {
    this.vm.load(this.listId);
  }

  addCard() {
    if (this.newCardTitle.trim()) {
      this.service.createCard(this.listId, this.newCardTitle, Date.now()).subscribe(() => {
        this.vm.load(this.listId);
        this.newCardTitle = '';
      });
    }
  }
}
