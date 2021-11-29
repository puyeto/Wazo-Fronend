import { AfterViewInit, Component, OnInit } from '@angular/core';

import { LoadingService } from '../../../../core/services/loading.service';
import { AlbumsConfigService } from '../../../../core/services/albums-config.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit, AfterViewInit {

  podcasts: any = {};

  constructor(private loadingService: LoadingService,
    private albumsConfigService: AlbumsConfigService) { }

  ngOnInit() {
    this.initAlbums();
  }

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  // Initialize albums
  initAlbums() {
    this.podcasts.list = this.albumsConfigService.albumsList;
    setTimeout(async () => { this.podcasts.record = await this.albumsConfigService.albumCount; }, 2000);

  }

}
