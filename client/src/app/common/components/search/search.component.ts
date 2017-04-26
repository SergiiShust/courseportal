import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'trainme-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;

  constructor() { }

  ngOnInit() {
  }

  @Output() searchTextOutput: EventEmitter<string> = new EventEmitter();
  findHandler() {
    this.searchTextOutput.emit(this.search);
  }
}
