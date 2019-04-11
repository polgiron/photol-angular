import { Component, OnInit } from '@angular/core';
import { BaseApi } from 'src/app/services/base-api.service';
import { PhotoService } from 'src/app/services/photo.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  modalPhoto: any;

  searchResults: Object;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.modalPhotoChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe(modalPhoto => {
        this.modalPhoto = modalPhoto;
        // console.log(this.photoId);
      });
  }

  onSearch(searchResults: Object) {
    console.log('searchResults', searchResults);
    this.searchResults = searchResults;
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
