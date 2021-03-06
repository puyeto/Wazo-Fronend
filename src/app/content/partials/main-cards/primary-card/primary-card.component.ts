import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../../../../service/api.service';
import { AudioPlayerService } from '../../../../core/services/audio-player.service';
import { NotificationService } from '../../../../service/notification.service';
import { NotificationType } from 'src/app/service/notification.message';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html'
})
export class PrimaryCardComponent implements OnInit {

  @Input() song: any = {};
  @Input() showOptions = false;
  @Input() imageBorderRadiusClass = 'card-img--radius-lg';

  classes = '';

  constructor(private audioPlayerService: AudioPlayerService, private api: ApiService,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.classes = 'custom-card--img ' + this.imageBorderRadiusClass;
  }

  addFavorite() {
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

  shareSong() {
  }

  addInPlayer() {
    this.audioPlayerService.playSong(this.song);
  }

}
