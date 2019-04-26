import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fadeOutAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [fadeOutAnimation]
})
export class ImageComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  // @Output() isImageLoaded: EventEmitter<boolean> = new EventEmitter();
  @Input() width: number;
  @Input() height: number;
  @Input() set src(value: string) {
    this.isLoaded = false;
    this._src = value;
    this.setPadding();
  };
  private _src: string;
  isLoaded: boolean = false;

  get src() {
    return this._src;
  }

  constructor() { }

  ngOnInit() {

  }

  setPadding() {
    const ratio = this.height / this.width * 100;
    this.wrapper.nativeElement.style.paddingBottom = ratio + '%';
  }

  onLoad() {
    // this.isImageLoaded.emit(true);
    this.isLoaded = true;
  }
}
