import { Component } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';
import { Gif } from '../../../interface/gifs.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  constructor(
    readonly gifsService: GifsService
  ){ }
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
