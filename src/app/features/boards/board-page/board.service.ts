import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';


@Injectable()
export class BoardService {
    constructor(private api: ApiService) {}

    getBoards() {
    return this.api.get<any[]>('/boards');
    }
}