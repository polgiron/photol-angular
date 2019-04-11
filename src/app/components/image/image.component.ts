import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { fadeOutAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [fadeOutAnimation]
})
export class ImageComponent implements OnInit {
  @Input() src: string;
  @Input() width: number;
  @Input() height: number;
  @ViewChild('wrapper') wrapper: ElementRef;
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
    const ratio = this.height / this.width * 100;
    this.wrapper.nativeElement.style.paddingBottom = ratio + '%';
  }
}
