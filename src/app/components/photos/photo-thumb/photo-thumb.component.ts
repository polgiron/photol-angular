import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-thumb',
  templateUrl: './photo-thumb.component.html',
  styleUrls: ['./photo-thumb.component.scss']
})
export class PhotoThumbComponent implements OnInit {
  @Input() photo;

  constructor() { }

  ngOnInit() {
  }
}
