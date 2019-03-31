import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseApi } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album;
  photos;
  numberOfColumns: number = 3;

  constructor(
    private route: ActivatedRoute,
    private api: BaseApi
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const albumId = params['albumId'];
      this.api.get('album/' + albumId).then((album: any) => {
        this.album = album;
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

    // this.setState({ cards: out, columns: columns });
  }
}
