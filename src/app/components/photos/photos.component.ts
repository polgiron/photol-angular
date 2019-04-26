import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
// import Macy from 'Macy';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() photos: any;
  numberOfColumns: number = 3;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.currentPhotos = this.photos;
    this.reorder(this.photos);

    // const macyInstance = Macy({
    //   container: '#photos-list',
    //   columns: 3,
    //   trueOrder: true,
    //   margin: 16,
    //   breakAt: {
    //     992: {
    //       margin: 16,
    //       columns: 2
    //     },
    //     767: {
    //       margin: 16,
    //       columns: 1
    //     }
    //   }
    // });
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

    this.photos = out;
  }
}
