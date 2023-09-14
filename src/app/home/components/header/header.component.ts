import { Component } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  historyClose: boolean = false;
  toSearch: string = '';

  constructor(
    readonly gifsService:GifsService,
    readonly stateService: StateService) {
      this.stateService.hideComponent$.subscribe(
        valor => this.historyClose = valor
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
