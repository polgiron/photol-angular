import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Utils } from 'src/app/utils/utils';
import { fadeAnimation } from 'src/app/utils/animations';

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
    private utils: Utils
  ) { }

  ngOnInit() {
    this.photoService.getPhotostream().then(photostream => {
      this.photostream = photostream;
      console.log(photostream);
      this.utils.hideSplashscreen();
    })
  }
}
