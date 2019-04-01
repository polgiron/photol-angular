import { Component, OnInit } from '@angular/core';
import { BaseApi } from 'src/app/services/base-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: string[] = [];

  constructor(
    private api: BaseApi,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.api.get('albums').then((albums: any) => {
      this.albums = albums;
      albums.forEach(album => {
        album.year = this.datePipe.transform(album.primary_photo_extras.datetaken, 'y');
      });
    });
  }
}
