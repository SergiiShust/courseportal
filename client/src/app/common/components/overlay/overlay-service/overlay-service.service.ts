import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class OverlayService {

  overlayStateEvent: Subject<boolean> = new Subject();

  constructor() {
  }

  show() {
    this.overlayStateEvent.next(true);
  }

  hide() {
    this.overlayStateEvent.next(false);
  }
}
