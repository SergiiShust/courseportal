import {Component, Input, OnInit} from '@angular/core';
import {OverlayService} from "./overlay-service/overlay-service.service";

@Component({
  selector: 'trainme-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input()
  showOverlay: boolean = false;

  constructor(private overlayServiceService: OverlayService) {
  }

  ngOnInit() {
    this.overlayServiceService.overlayStateEvent.subscribe((state) => {
      this.showOverlay = state;
    });
  }
}
