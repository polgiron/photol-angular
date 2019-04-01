import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PhotoService {
  private _modalPhoto: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor() { }

  public modalPhotoChannel(): Observable<number> {
    return this._modalPhoto.asObservable();
  }

  openPhotoModal(photoId: number) {
    this._modalPhoto.next(photoId);
    document.body.classList.add('is-static');
  }

  closePhotoModal() {
    this._modalPhoto.next(null);
    document.body.classList.remove('is-static');
  }
}
