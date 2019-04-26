import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  modalPhoto: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    const params: any = this.route.queryParams;
    const photoId = params.value.open;

    if (photoId) {
      this.router.navigate(['/', 'photos', photoId]);
    }

    this.photoService.modalPhotoChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe(modalPhoto => {
        // console.log(modalPhoto);
        this.modalPhoto = modalPhoto;
      });
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
