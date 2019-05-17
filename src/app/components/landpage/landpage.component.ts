import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Utils } from 'src/app/utils/utils';
import { fadeAnimation } from 'src/app/utils/animations';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss'],
  animations: [fadeAnimation]
})
export class LandpageComponent implements OnInit {
    photostream: any;

  constructor(
    private photoService: PhotoService,
    private utils: Utils,
    private cache: CacheService
  ) { }

  ngOnInit() {
    this.getLandpage();
  }

  async getLandpage() {
    this.photostream = JSON.parse(this.cache.get('photostream'));

    if (!this.photostream) {
      this.photostream = await this.photoService.getPhotostream();
      this.cache.set('photostream', JSON.stringify(this.photostream));
      this.utils.hideSplashscreen();
    } else {
      this.utils.hideSplashscreen();
    }
  }
}
