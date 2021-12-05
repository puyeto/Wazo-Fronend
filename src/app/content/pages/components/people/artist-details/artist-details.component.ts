import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoadingService } from '../../../../../core/services/loading.service';
import { AudioPlayerService } from '../../../../../core/services/audio-player.service';
import { ApiService } from '../../../../../service/api.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  artistId: number;
  artistDetails: any;
  skip = 0;
  peopleBGColor = '#fff';
  peoplehomeBGImage = 'url(home.jpg)';

  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private api: ApiService,
    private loadingService: LoadingService,
    private audioPlayerService: AudioPlayerService) {

    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
        this.artistId = parseInt(param.id, 10);
        this.getArtistDetails();
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  getArtistDetails() {
    this.api.postWithAuth("artist/songs", { artist_id: this.artistId, skip: this.skip }).subscribe((res: any) => {
      // console.log(res);
      if (res.success) {

        this.artistDetails = {
          id: res.artist_detail.artist_id,
          name: res.artist_detail.name,
          cover_url: res.artist_detail.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : res.artist_detail.picture,
          bio: '',
          no_of_songs: res.artist_detail.song_artists_count
        }

        this.peoplehomeBGImage = 'url(' + this.artistDetails.cover_url + ')';

        let songs = res.data;
        this.artistDetails.songs = [];
        songs.forEach(element => {
          this.artistDetails.songs.push(
            {
              id: element.song_id,
              premium: true,
              favorite: element.wishlist_status,
              name: element.title,
              description: element.description,
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
  }


  playAllSongs() {
    this.audioPlayerService.playNowPlaylist(this.artistDetails);
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
