import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { SimpleModalService } from 'ngx-simple-modal';
import { LanguageComponent } from './language/language.component';
import { SearchService } from '../../../core/services/search.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { SkinService } from '../../../core/services/skin.service';
import { Config } from '../../../config/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('headerBackdrop', { static: false }) backdrop: ElementRef;
  public config: Config = new Config();
  headerClasses = 'bg-primary';

  language: any = {};
  currentUser: any = {};

  searchSubscription: Subscription;
  skinSubscription: Subscription;
  themeSkin = this.localStorageService.getThemeSkin();

  constructor(@Inject(DOCUMENT) private document: Document,
    private searchService: SearchService,
    private simpleModalService: SimpleModalService,
    private localStorageService: LocalStorageService,
    private skinService: SkinService) {
    this.language = {
      title: 'Language',
      image: './assets/images/svg/translate.svg'
    };
  }

  ngOnInit() {
    this.currentUser = this.localStorageService.getCurrentUser();
    if (this.themeSkin) {
      this.headerClasses = 'bg-' + Config.THEME_CLASSES[this.themeSkin.header];
    } else {
      this.themeSkin = this.config.config.themeSkin;
    }

    this.searchSubscription = this.searchService.searchStatus.subscribe((value) => {
      if (value) {
        this.hideSearchResults();
      }
    });
    this.skinSubscription = this.skinService.themeSkin.subscribe((skin) => {
      if (skin) {
        this.headerClasses = 'bg-' + Config.THEME_CLASSES[skin.header];
      }
    });
  }

  showSearchResults() {
    this.document.body.classList.add(Config.classes.openSearch);
    this.backdrop.nativeElement.classList.add(Config.classes.show);
  }

  hideSearchResults() {
    this.document.body.classList.remove(Config.classes.openSearch);
    this.backdrop.nativeElement.classList.remove(Config.classes.show);
  }

  openLanguagesModal() {
    this.hideSearchResults();
    const modal = this.simpleModalService.addModal(LanguageComponent, {})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        } else {
        }
      });
  }

  openSidebar() {
    this.document.body.classList.add(Config.classes.openSidebar);
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    if (this.skinSubscription) {
      this.skinSubscription.unsubscribe();
    }
  }

  setThemeSkin(event) {
    if (event.target.checked) {
      this.themeSkin.theme = 'dark';
    } else if (!event.target.checked) {
      this.themeSkin.theme = 'light';
    }
    this.skinService.skin = this.themeSkin;
  }

}
