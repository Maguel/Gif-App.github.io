import { Component } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hasTwoChildren: boolean = false;
  hide?:boolean = undefined;
  constructor(
    readonly stateService: StateService
  ) {
    this.stateService.showComponent$.subscribe(
      valor => this.hasTwoChildren = valor
    );
    this.stateService.hideComponent$.subscribe(
      valor => {
        this.hide = valor;
        //onsole.log(this.hide);
      }
    );
  }
}
