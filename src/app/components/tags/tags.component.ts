import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: string[] = [];
  tagString: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.tags);
    this.tagString = this.tags.join(', ');
  }
}
