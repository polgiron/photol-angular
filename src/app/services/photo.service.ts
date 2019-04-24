import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseApi } from 'src/app/services/base-api.service';

@Injectable()
export class PhotoService {
  private _modalPhoto: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentPhotos;
  currentIndex: number;

  constructor(
    private api: BaseApi
  ) { }

  public modalPhotoChannel(): Observable<any> {
    return this._modalPhoto.asObservable();
  }

  openPhotoModal(index: number) {
    this.currentIndex = index;
    this._modalPhoto.next(this.currentPhotos[index]);
    document.body.classList.add('is-static');
  }

  goNextModal() {
    // console.log(this.currentPhotos);
    this.currentIndex++;
    this._modalPhoto.next(this.currentPhotos[this.currentIndex]);
  }

  goPrevModal() {
    this.currentIndex--;
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
