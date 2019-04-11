import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseApi } from 'src/app/services/base-api.service';
import { AlbumService } from 'src/app/services/album.service';
import { fadeAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations: [fadeAnimation]
})
export class AlbumComponent implements OnInit, OnDestroy {
  album: any;
  photos: any;
  numberOfColumns: number = 3;

  constructor(
    private route: ActivatedRoute,
    private api: BaseApi,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const albumId = params['albumId'];
      this.api.get('album/' + albumId).then((album: any) => {
        this.album = album;
        this.albumService.setAlbumTitle(this.album.title);
        // this.photos = album.photo;
        this.reorder(album.photo);
      });
    });
  }

  reorder(array) {
    array.forEach((element, index) => {
      element.index = index;
    });

    const out = [];
    let col = 0;

    while (col < this.numberOfColumns) {
      for (let i = 0; i < array.length; i += this.numberOfColumns) {
        let _val = array[i + col];
        if (_val !== undefined) {
          out.push(_val);
        }
      }
      col++;
    }

    console.log(out);
    this.photos = out;
  }

  ngOnDestroy() {
    this.albumService.setAlbumTitle('');
  }
}
