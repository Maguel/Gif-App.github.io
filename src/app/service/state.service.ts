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
    this.showComponentSubject.next(!this.showComponentSubject.value);
  }
  hideComponent(): void {
    this.hideComponentSubjet.next(!this.hideComponentSubjet.value);
  }
}
