import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private showComponentSubject = new BehaviorSubject<boolean>(false);
  showComponent$ = this.showComponentSubject.asObservable();

  private hideComponentSubjet = new BehaviorSubject<boolean>(false);
  hideComponent$ = this.hideComponentSubjet.asObservable();

  toggleComponent(): void {
    if(!this.showComponentSubject.value) {
      this.showComponentSubject.next(!this.showComponentSubject.value);
    }else {
      setTimeout(() => {
        this.showComponentSubject.next(!this.showComponentSubject.value);
      },300);
    }
  }
  hideComponent(): void {
    this.hideComponentSubjet.next(!this.hideComponentSubjet.value);
  }
}
