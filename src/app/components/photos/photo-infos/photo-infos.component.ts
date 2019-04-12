import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-infos',
  templateUrl: './photo-infos.component.html',
  styleUrls: ['./photo-infos.component.scss']
})
export class PhotoInfosComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() tags: string[] = [];
  @Input() time: string;
  @Input() contrast: string;
  @Input() aperture: string;

  constructor() { }

  ngOnInit() {
    console.log(this.description);
    if (this.description == '') {
      this.description = 'No description';
    }
  }
}
