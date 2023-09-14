import { Component } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(
    readonly gifsService:GifsService
  ) {}
  get history(): string[] {
   return this.gifsService.historial;
  }
  loadHistory(query: string): void {
    this.gifsService.buscarGifs(query);
  }
}
