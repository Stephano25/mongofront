import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardViewModel } from './card.viewmodel';
import { CardService } from './card.service';
import { CardModel } from './card.model';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
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

  drop(event: CdkDragDrop<CardModel[]>) {
    const cards = event.container.data ?? [];
    moveItemInArray(cards, event.previousIndex, event.currentIndex);

    this.service.updateCardPositions(this.listId, cards).subscribe(() => {
      console.log('Positions des cartes mises à jour');
    });
  }

  deleteCard(id: string) {
    if (confirm('Supprimer cette carte ?')) {
        this.service.deleteCard(id).subscribe(() => {
        this.vm.load(this.listId);
        });
    }
  }
}
