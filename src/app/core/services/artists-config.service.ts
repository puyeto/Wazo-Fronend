import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

import { ArtistsConfig } from '../../config/artists';

@Injectable({
  providedIn: 'root'
})
export class ArtistsConfigService {

  public artistsConfig: ArtistsConfig = new ArtistsConfig(this.api);

  constructor(private api: ApiService) { }

  get artistsList() {
    return this.artistsConfig.config.items;
  }

  getArtistByIb(id) {
    return this.artistsList.find(artist => artist.id === id);
  }
}
