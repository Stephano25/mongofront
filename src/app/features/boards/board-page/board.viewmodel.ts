import { Injectable } from '@angular/core';
import { BoardService } from './board.service';


@Injectable()
export class BoardViewModel {
    boards$;

    constructor(private service: BoardService) {
        this.boards$ = this.service.getBoards();
    }
}