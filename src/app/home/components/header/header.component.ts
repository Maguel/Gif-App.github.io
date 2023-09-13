import { Component } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  active:boolean = false;
  toSearch: string = '';

  constructor(
    readonly gifsService:GifsService
  ){}

  search(): void {
    this.gifsService.buscarGifs(this.toSearch);
  }
  activeBtn(): void {
    this.active = this.active?false:true;
  }
}
