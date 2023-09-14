import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';
import { StateService } from 'src/app/service/state.service';
import { Gif } from '../../../interface/gifs.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  historyActive: boolean = false;
  historyClose: boolean = false;
  constructor(
    readonly gifsService: GifsService,
    readonly stateService: StateService
  ) { 
    this.stateService.showComponent$.subscribe(
      valor => this.historyActive = valor
    );
    this.stateService.hideComponent$.subscribe(
      valor => this.historyClose = valor
    );
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.gifsService.resultados) {
      this.gifsService.buscarGifs('welcome');
    }
  }
  get gifs(): Gif[] {
    return this.gifsService.resultados;
  }
  copy(link: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = link;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
