import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {OverlayService} from "./overlay-service/overlay-service.service";

@Component({
  selector: 'trainme-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {

  @Input()
  showOverlay: boolean = false;

  constructor(private overlayServiceService: OverlayService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.overlayServiceService.overlayStateEvent.subscribe((state) => {
      this.showOverlay = state;
      this.ref.markForCheck();
    });
  }
}
