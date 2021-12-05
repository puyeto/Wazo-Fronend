import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Config } from '../../../../../config/config';
import { LocalStorageService } from '../../../../../core/services/local-storage.service';

@Component({
  selector: 'app-aside-left-header',
  templateUrl: './aside-left-header.component.html'
})
export class AsideLeftHeaderComponent implements OnInit {

  config: Config;
  brand: any = {};

  constructor(@Inject(DOCUMENT) private document: Document, private localStorageService: LocalStorageService) {
    this.config = new Config();
    this.brand = this.config.config.brand;
  }

  ngOnInit() {
    const syssettings = this.localStorageService.getSystemSettings()
    console.log(syssettings);
    // this.brand.logo = syssettings.site_logo;
    this.brand.name = syssettings.name;
  }

  toggleIconicSidebar() {
    if (this.document.body.classList.contains(Config.classes.iconicSidebar)) {
      this.document.body.classList.remove(Config.classes.iconicSidebar);
    } else {
      this.document.body.classList.add(Config.classes.iconicSidebar);
    }
  }

  hideSidebar() {
    this.document.body.classList.remove(Config.classes.openSidebar);
  }

}
