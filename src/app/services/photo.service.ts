import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseApi } from 'src/app/services/base-api.service';

@Injectable()
export class PhotoService {
  private _modalPhoto: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentPhotos: any;

  constructor(
    private api: BaseApi
  ) { }

  public modalPhotoChannel(): Observable<any> {
    return this._modalPhoto.asObservable();
  }

  openPhotoModal(photo: any) {
    this._modalPhoto.next(this.currentPhotos.indexOf(photo));
    document.body.classList.add('is-static');
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
