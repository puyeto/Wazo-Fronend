import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

import { SongsConfig } from '../../config/songs';

@Injectable({
  providedIn: 'root'
})
export class SongsConfigService {

  public songsConfig: SongsConfig = new SongsConfig(this.api);

  constructor(private api: ApiService) { }

  get songsList() {
    return this.songsConfig.config.items;
  }

  get banner() {
    return this.songsConfig.config.banner;
  }

  get defaultSong() {
    return this.songsConfig.config.items;
  }

  getSongByID(id) {
    return this.songsList.find(song => song.id === id);
  }
}
