import { Component, OnInit } from '@angular/core';
import { Config } from './config/config';

import { LoadingService } from './core/services/loading.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'listen';
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');

  constructor(private loadingService: LoadingService, private api: ApiService, private localStorageService: LocalStorageService) {
    this.loadingService.startLoading();
  }

  ngOnInit() {
    this.api.get("get_settings_json").subscribe((res: any) => {
      console.log();
      if (res.data) {
        this.localStorageService.setLocalStorage(Config.SYSTEM_SETTING, res.data);
        this.favIcon.href = res.data.site_icon;
      } else {
        console.log(res.error);
      }
    }, () => {
      console.log("oops something went wrong");
    });
  }
}
