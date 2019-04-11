import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { BaseApi } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {
  @ViewChild('left') leftElement: ElementRef;
  @ViewChild('right') rightElement: ElementRef;
  @Input() photo: any;
  private _resizeListener: EventListener;
  imageSrc: string;
  padding: number = 32;
  mobileBreakpoint: number = 767;
  tags: string[] = [];
  time: number;
  contrast: number;
  aperture: number;

  constructor(
    private api: BaseApi,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    // this.api.get('photo/' + this.photo.id).then((photo: any) => {
    //   console.log(photo);

    //   this.photo.title = photo.title._content;
    //   this.photo.description = photo.description._content;
    //   this.photo.tags = photo.tags;

    //   console.log(this.photo.title);
    //   console.log(this.photo.description);

    //   this.extendTags();
    // });

    this.extendPhoto();

    this.setDialogWidth();

    this._resizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this._resizeListener);
  }

  onWindowResize() {
    this.setDialogWidth();
  }

  setDialogWidth() {
    if (window.innerWidth < this.mobileBreakpoint) {
      return;
    }

    const oriWidth = this.photo.width_m;
    const oriHeight = this.photo.height_m;
    const rightWidth = this.rightElement.nativeElement.clientWidth;
    const maxHeight = window.innerHeight - 2 * this.padding;
    const maxWidth = window.innerWidth - 2 * this.padding - rightWidth;

    let newWidth = oriWidth * maxHeight / oriHeight;
    let newHeight = maxHeight;

    if (newWidth > maxWidth) {
      newWidth = maxWidth;
      newHeight = oriHeight * newWidth / oriWidth;
    }

    this.leftElement.nativeElement.style.width = newWidth + 'px';
    this.leftElement.nativeElement.style.height = newHeight + 'px';
  }

  extendPhoto() {
    // Image src
    this.imageSrc = this.api.getPhotoUrl(this.photo.farm, this.photo.server, this.photo.id, this.photo.secret, 'b');

    // Extend tags
    this.photo.tags.split(' ').forEach(tag => {
      if (tag.includes('settingtime')) {
        this.time = tag.replace('settingtime', '');
      } else if (tag.includes('settingaperture')) {
        this.aperture = tag.replace('settingaperture', '');
      } else if (tag.includes('settingcontrast')) {
        this.contrast = tag.replace('settingcontrast', '');
      } else {
        this.tags.push(tag);
      }
    });
  }

  close() {
    this.photoService.closePhotoModal();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this._resizeListener);
  }
}
