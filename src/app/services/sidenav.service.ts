import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidenavService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }
  public toggle() {
    return this.sideNavToggleSubject.next("toggle");
  }
}
