import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoadingService } from '../../../../../core/services/loading.service';
import { AudioPlayerService } from '../../../../../core/services/audio-player.service';
import { ApiService } from '../../../../../service/api.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html'
})
export class CategoryDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  categoryId: number;
  categoryDetails: any;
  skip = 0;
  categoryBGColor = '#fff';
  categoryBGImage = 'url(hoe.jpg)';

  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private api: ApiService,
    private loadingService: LoadingService,
    private audioPlayerService: AudioPlayerService) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
        this.categoryId = parseInt(param.id, 10);
        this.getAlbumDetails();
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  // Initialize static data for display
  getAlbumDetails() {
    this.api.postWithAuth("category/songs", { category_id: this.categoryId, skip: this.skip }).subscribe((res: any) => {
      if (res.success) {
        this.categoryDetails = {
          id: res.category_detail.category_id,
          name: res.category_detail.name,
          cover_art_url: res.category_detail.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : res.category_detail.picture,
          cover_url: res.category_detail.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : res.category_detail.picture,
          no_of_songs: res.category_detail.song_categories_count
        }

        this.categoryBGImage = 'url(' + this.categoryDetails.cover_art_url + ')';

        let songs = res.data;
        this.categoryDetails.songs = [];
        songs.forEach(element => {
          this.categoryDetails.songs.push(
            {
              id: element.song_id,
              premium: true,
              favorite: false,
              name: element.title,
              description: element.description,
              artist: '',
              album: '',
              url: 'https://streamtunes-assets.s3.us-east-1.wasabisys.com/uploads/songs/' + element.web_audio_url,
              cover_art_url: element.picture == '' || element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              cover_url: element.picture == '' || element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              ratings: 4.5,
              composer: '',
              lyricist: '',
              director: '',
              downloads: '',
              lyrics: ''
            }
          );

        });

      } else {
        console.log(res.error);
      }
    }, () => {
      console.log("oops something went wrong");
    });
  }

  playAllSongs() {
    this.audioPlayerService.playNowPlaylist(this.categoryDetails.songs);
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
