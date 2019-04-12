import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseApi } from 'src/app/services/base-api.service';
import { AlbumService } from 'src/app/services/album.service';
import { fadeAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations: [fadeAnimation]
})
export class AlbumComponent implements OnInit, OnDestroy {
  album: any;

  constructor(
    private route: ActivatedRoute,
    private api: BaseApi,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const albumId = params['albumId'];
      if (albumId) {
        this.api.get('album/' + albumId).then((album: any) => {
          this.album = album;
          this.albumService.setAlbumTitle(this.album.title);
        });
      }
    });
  }

  ngOnDestroy() {
    this.albumService.setAlbumTitle('');
  }
}
