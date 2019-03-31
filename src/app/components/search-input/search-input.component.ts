import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseApi } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() search: EventEmitter<Object> = new EventEmitter();
  searchValue: string = '';
  timeout;

  constructor(
    private api: BaseApi
  ) { }

  ngOnInit() {

  }

  onKeyUp() {
    clearTimeout(this.timeout);
    if (this.searchValue != '') {
      this.timeout = setTimeout(() => {
        this.performSearch();
      }, 500);
    } else {
      this.search.emit(null);
    }
  }

  performSearch() {
    console.log('SEARCH', this.searchValue);
    this.api.get('search/' + this.searchValue).then((searchResults: any) => {
      console.log(searchResults.photo);
      this.search.emit(searchResults.photo);
    });
  }
}
