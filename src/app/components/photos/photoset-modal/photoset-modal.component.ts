import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photoset-modal',
  templateUrl: './photoset-modal.component.html',
  styleUrls: ['./photoset-modal.component.scss']
})
export class PhotosetModalComponent implements OnInit {
  @Input() index: number;
  photos: any;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photos = this.photoService.currentPhotos;
  }

  getPrevIndex(index: number) {
    if (index - 1 < 0) {
      return this.photos.length - 1;
    } else {
      return index - 1;
    }
  }

  getNextIndex(index: number) {
    if (index + 1 >= this.photos.length) {
      return 0;
    } else {
      return index + 1;
    }
  }

  prev() {
    this.index--;

    if (this.index < 0) {
      this.index = this.photos.length - 1;
    }
  }

  next() {
    this.index++;

    if (this.index >= this.photos.length) {
      this.index = 0;
    }
  }

  close() {
    this.photoService.closePhotoModal();
  }
}
