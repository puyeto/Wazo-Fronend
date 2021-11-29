import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

import { TrendingConfig } from '../../config/trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingConfigService {

  public trendingConfig: TrendingConfig = new TrendingConfig(this.api);

  constructor(private api: ApiService) { }

  get trendingList() {
    return this.trendingConfig.trendConfig.items;
  }

  get trendingCount() {
    return this.trendingConfig.trendCount;
  }

  get defaultSong() {
    return this.trendingConfig.trendConfig.items;
  }

  getSongByIb(id) {
    return this.trendingList.find(song => song.id === id);
  }
}
