import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

import { AlbumsConfig } from '../../config/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsConfigService {

  public albumsConfig: AlbumsConfig = new AlbumsConfig(this.api);

  constructor(private api: ApiService) { }

  get albumsList() {
    return this.albumsConfig.config.items;
  }

  getAlbumByIb(id) {
    return this.albumsList.find(album => album.id === id);
  }
}
