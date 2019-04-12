import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseApi } from 'src/app/services/base-api.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photo: any;
  isLoaded: boolean = false;
  isVertical: boolean = false;
  tags: string[] = [];
  time: number;
  contrast: number;
  aperture: number;

  constructor(
    private route: ActivatedRoute,
    private api: BaseApi,
    private utils: Utils
  ) { }

  ngOnInit() {
    // if (this.photoId) {
    //   this.getPhoto(this.photoId);
    // } else {
      this.route.params.subscribe((params: Params) => {
        this.getPhoto(params['photoId']);
      });
    // }
  }

  getPhoto(photoId: number) {
    console.log('photoId', photoId);
    this.api.get('photo/' + photoId).then((photo: any) => {
      this.photo = this.extendPhoto(photo);
      this.getPhotoOrientation();
    });
  }

  getPhotoOrientation() {
    const image = new Image();
    image.onload = () => {
      if (image.height > image.width) {
        this.isVertical = true;
      }
      this.isLoaded = true;
    }
    image.src = this.photo.photoUrl;
  }

  extendPhoto(photo: any) {
    console.log(photo);

    photo.photoUrl = this.utils.getPhotoUrl(photo.farm, photo.server, photo.id, photo.secret, 'b');

    photo.tags.tag.forEach(tag => {
      if (tag.raw.substring(0, 1).includes('$')) {
        switch (tag.raw.substring(1, 2)) {
          case 't':
            this.time = tag.raw.substring(2);
            break;
          case 'a':
            this.aperture = tag.raw.substring(2);
            break;
          case 'c':
            this.contrast = tag.raw.substring(2);
            break;
        }
      } else {
        this.tags.push(tag.raw);
      }
    });

    return photo;
  }
}
