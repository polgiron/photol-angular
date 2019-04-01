import { Component, OnInit } from '@angular/core';
import { BaseApi } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchResults: Object;

  constructor() { }

  ngOnInit() {

  }

  onSearch(searchResults: Object) {
    console.log('searchResults', searchResults);
    this.searchResults = searchResults;
  }
}
