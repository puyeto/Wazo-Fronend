import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoadingService } from '../../../../../core/services/loading.service';
import { AudioPlayerService } from '../../../../../core/services/audio-player.service';
import { ApiService } from '../../../../../service/api.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html'
})
export class AlbumDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  albumId: number;
  albumDetails: any;
  skip = 0;

  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private api: ApiService,
    private loadingService: LoadingService,
    private audioPlayerService: AudioPlayerService) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
        this.albumId = parseInt(param.id, 10);
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
    this.api.postWithAuth("movie/songs", { movie_album_id: this.albumId, skip: this.skip }).subscribe((res: any) => {
      if (res.success) {
        this.albumDetails = {
          id: res.movie_detail.movie_album_id,
          name: res.movie_detail.name,
          cover_art_url: res.movie_detail.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : res.movie_detail.picture,
          cover_url: res.movie_detail.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : res.movie_detail.picture,
          no_of_songs: res.movie_detail.songs_count
        }

        let songs = res.data;
        this.albumDetails.songs = [];
        songs.forEach(element => {
          this.albumDetails.songs.push(
            {
              id: element.song_id,
              premium: true,
              favorite: false,
              name: element.title,
              artist: '',
              album: '',
              url: 'https://streamtunes-assets.s3.us-east-1.wasabisys.com/uploads/songs/' + element.web_audio_url,
              cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
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
    // this.albumDetails = this.albumsConfigService.getAlbumByIb(this.albumId);
    // this.albumDetails.songs = this.songsConfigService.songsList;
  }

  playAllSongs() {
    this.audioPlayerService.playNowPlaylist(this.albumDetails);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
