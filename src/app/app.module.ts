import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './content/layout/layout.module';
import { LoaderComponent } from './content/layout/loader/loader.component';
import { LoadingService } from './core/services/loading.service';
import { MenuConfigService } from './core/services/menu-config.service';
import { SongsConfigService } from './core/services/songs-config.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    LoadingService,
    MenuConfigService,
    SongsConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
