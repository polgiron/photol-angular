import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() photos: any;
  numberOfColumns: number = 3;
  reorderedPhotos;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.currentPhotos = this.photos;
    this.reorder(this.photos);
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

    this.reorderedPhotos = out;
    console.log(this.reorderedPhotos);
  }
}
