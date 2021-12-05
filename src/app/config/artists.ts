import { ApiService } from "../service/api.service";

export class ArtistsConfig {

  public config: any = {};

  constructor(private api: ApiService) {
    this.config = {
      items: [],
      details: {}
    };

    this.api.postWithAuth("home/second/list", {}).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        var datas = res.data;
        var artists = datas.artists.data;

        artists.forEach(element => {
          this.config.items.push(
            {
              id: element.artist_id,
              name: element.name,
              dob: '',
              ratings: 4.5,
              cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              bio: ''
            }
          );

        });

        // this.setState({
        //   first_section_items: response.data.data,

        //   isLoaded: true,

        //   banner_length: datas.banner.data.length,

        //   recent_activities_length: datas["recent activities"].data.length,

        //   trending_length: datas.trending.data.length
        // });

        // this.homePageSecondSection();
      } else {
        console.log(res.error);
      }
    }, () => {
      console.log("oops something went wrong");
    });


  }

  GetArtistSongsByArtistID(id: number, skip = 0) {
    this.api.postWithAuth("artist/songs", { artist_id: id, skip: skip }).subscribe((res: any) => {
      // console.log(res);
      if (res.success) {
        var songs = res.data;
        this.config.details = res.artist_detail

        songs.forEach(element => {
          this.config.items.push(
            {
              id: element.song_id,
              premium: true,
              favorite: element.wishlist_status,
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

        return this.config
      } else {
        console.log(res.error);
      }
    }, () => {
      console.log("oops something went wrong");
    });
  }
}
