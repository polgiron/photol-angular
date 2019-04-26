import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseApi } from 'src/app/services/base-api.service';

@Injectable()
export class PhotoService {
  private _modalPhoto: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentPhotos: any;
  currentIndex: number;

  constructor(
    private api: BaseApi
  ) { }

  public modalPhotoChannel(): Observable<any> {
    return this._modalPhoto.asObservable();
  }

  openPhotoModal(photo: any) {
    this.currentIndex = this.currentPhotos.indexOf(photo);
    // console.log('this.currentIndex', this.currentIndex);
    // this._modalPhoto.next(this.currentPhotos[index]);
    this._modalPhoto.next(photo);
    document.body.classList.add('is-static');
  }

  goNextModal() {
    this.currentIndex++;

    if (this.currentIndex >= this.currentPhotos.length) {
      this.currentIndex = 0;
    }

    this._modalPhoto.next(this.currentPhotos[this.currentIndex]);
  }

  goPrevModal() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.currentPhotos.length - 1;
    }

    this._modalPhoto.next(this.currentPhotos[this.currentIndex]);
  }

  closePhotoModal() {
    this._modalPhoto.next(null);
    document.body.classList.remove('is-static');
  }

  getPhoto(photoId: number) {
    return this.api.get('photo/' + photoId);
  }

  getContext(photoId: number) {
    return this.api.get(`photo/${photoId}/context`);
  }
}
