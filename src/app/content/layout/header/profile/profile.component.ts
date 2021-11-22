import { Component, Input, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { Router } from '@angular/router';

import { MenuConfigService } from '../../../../core/services/menu-config.service';
import { SearchService } from '../../../../core/services/search.service';
import { LoginComponent } from '../login/login.component';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Config } from '../../../../config/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  @Input() user: any = {};

  userMenu: any = [];

  constructor(private searchService: SearchService, private localStorageService: LocalStorageService,
    private menuConfigService: MenuConfigService, private router: Router,
    private simpleModalService: SimpleModalService) {
    this.userMenu = this.menuConfigService.userMenuItems;
  }

  ngOnInit() {
  }

  closeSearchResult() {
    this.searchService.hideSearchResult();
  }

  openLoginModal() {
    this.closeSearchResult();
    const modal = this.simpleModalService.addModal(LoginComponent, {})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        } else {
        }
      });
  }

  logout() {
    this.localStorageService.clearLocalStorage(Config.CURRENT_USER);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
