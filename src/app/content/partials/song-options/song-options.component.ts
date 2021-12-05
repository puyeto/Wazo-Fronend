import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { ApiService } from '.././../../service/api.service';
import { NotificationService } from '../../../service/notification.service';
import { NotificationType } from 'src/app/service/notification.message';

@Component({
  selector: 'app-song-options',
  templateUrl: './song-options.component.html'
})
export class SongOptionsComponent implements OnInit {

  @HostBinding('class') class = 'dropleft';

  @Input() song: any;
  @Input() icon = '';

  constructor(private api: ApiService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.icon = 'la ' + this.icon;
  }

  addToWishList() {
    this.api.postWithAuth("wishlist/operations", { song_id: this.song.id }).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.song.favorite = !this.song.favorite;
        this.notificationService.sendMessage({
          message: res.message,
          type: NotificationType.success
        });

      } else {
        this.notificationService.sendMessage({
          message: res.error,
          type: NotificationType.error
        });
      }
    }, () => {
      console.log("oops something went wrong");
    });
  }

  addToPlayList() {
  }

  shareSong() {
  }

}
