import { Component } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  active:boolean = false;
  toSearch: string = '';

  constructor(
    readonly gifsService:GifsService,
    readonly stateService: StateService) {
      this.stateService.showComponent$.subscribe(
        valor => this.active = valor
      );
    }

  search(): void {
    this.gifsService.buscarGifs(this.toSearch);
  }
  activeBtn(): void {
   this.stateService.toggleComponent();
   this.stateService.hideComponent();
  }
}
