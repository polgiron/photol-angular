import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  modalPhoto: any;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.modalPhotoChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe(modalPhoto => {
        this.modalPhoto = modalPhoto;
      });
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
