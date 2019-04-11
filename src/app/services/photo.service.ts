import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PhotoService {
  private _modalPhoto: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  public modalPhotoChannel(): Observable<any> {
    return this._modalPhoto.asObservable();
  }

  openPhotoModal(photo: any) {
    this._modalPhoto.next(photo);
    document.body.classList.add('is-static');
  }

  closePhotoModal() {
    this._modalPhoto.next(null);
    document.body.classList.remove('is-static');
  }
}
