import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeFastAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeFastAnimation]
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  index: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    const params: any = this.route.queryParams;
    const photoId = params.value.open;

    if (photoId) {
      // this.router.navigate(['/', 'photos', photoId]);
    }

    this.photoService.modalPhotoChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe((index: number) => {
        this.index = index;
      });
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
