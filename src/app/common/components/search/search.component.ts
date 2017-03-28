import { Component, OnInit } from '@angular/core';

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

  findHandler(){
    console.log(this.search);
  }
}
