import { AfterViewInit, Component, OnInit } from '@angular/core';

import { TrendingConfigService } from '../../../../core/services/trending-config.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-songs',
  templateUrl: './trending.component.html'
})
export class TrendingComponent implements OnInit, AfterViewInit {

  songs: any = {};
  gridView = false;

  constructor(private loadingService: LoadingService,
    private trendingConfigService: TrendingConfigService) { }

  ngOnInit() {
    this.initTrending();
  }

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  // Initialize songs
  async initTrending() {
    this.songs.list = await this.trendingConfigService.trendingList;
    setTimeout(async () => { this.songs.record = await this.trendingConfigService.trendingCount; }, 2000);
  }

}
