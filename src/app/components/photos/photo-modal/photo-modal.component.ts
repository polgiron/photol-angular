import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {
  private _alive: boolean = true;
  photoId: any;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.modalPhotoChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe((photoId: number) => {
        this.photoId = photoId;
        console.log(this.photoId);
      });
  }

  close() {
    this.photoService.closePhotoModal();
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
