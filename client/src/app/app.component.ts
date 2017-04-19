import {ChangeDetectionStrategy, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _startTime: number;

  constructor(private _ngZone: NgZone) {

  }

  ngOnInit(): void {
    this._ngZone.onUnstable.subscribe(()=>{
      this._startTime = Date.now();
     // console.log(`Started onUnstable`)
    });

    this._ngZone.onStable.subscribe(()=>{
    // console.log(`Finished. onStable. Took ${Date.now() - this._startTime} miliseconds`);
    });
  }
}
