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
    // this.albums.push(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
  }

  onSearch(searchResults: Object) {
    console.log('searchResults', searchResults);
    this.searchResults = searchResults;
  }
}
